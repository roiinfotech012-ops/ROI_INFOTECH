import pagesData from "@/data/pages-content.json";

export interface ContentBlock {
  type: "heading" | "paragraph" | "list";
  level?: string;
  text?: string;
  items?: string[];
}

export interface PageContent {
  url: string;
  path: string;
  slug: string;
  category: string;
  title: string;
  meta_description: string;
  canonical?: string;
  hero_slides?: { text: string; href: string }[][];
  h1: string[];
  h2: string[];
  h3: string[];
  h4: string[];
  blocks?: ContentBlock[];
  paragraphs: string[];
  lists: string[][];
  all_strings?: string[];
  images: { src: string; alt: string }[];
  links: { text: string; href: string }[];
}

const typedPagesData = pagesData as Record<string, PageContent>;

export function getAllPages(): PageContent[] {
  return Object.values(typedPagesData);
}

export function getPageByUrl(url: string): PageContent | undefined {
  return typedPagesData[url];
}

export function getPageByPath(path: string): PageContent | undefined {
  const normalized = path.replace(/\/$/, "") || "/";
  for (const item of Object.values(typedPagesData)) {
    const itemPath = item.path.replace(/\/$/, "") || "/";
    if (itemPath === normalized) {
      return item;
    }
  }
  return undefined;
}

export function getPageBySlugAndCategory(
  slug: string,
  category?: string
): PageContent | undefined {
  const cleanSlug = slug.replace(/\/$/, "");
  for (const item of Object.values(typedPagesData)) {
    if (item.slug === cleanSlug && (!category || item.category === category)) {
      return item;
    }
  }
  return undefined;
}

export function getPagesByCategory(category: string): PageContent[] {
  return Object.values(typedPagesData).filter(
    (page) => page.category === category
  );
}

export function getAllServices(): PageContent[] {
  return getPagesByCategory("service");
}

export function getAllTechnologies(): PageContent[] {
  return getPagesByCategory("technology");
}

export function getAllHirePages(): PageContent[] {
  return getPagesByCategory("hire");
}

export function getAllSolutions(): PageContent[] {
  return getPagesByCategory("solution");
}
