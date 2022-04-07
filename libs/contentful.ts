import createClient from '../plugins/contentful';
const client = createClient();

interface ChildSys {
  sys: {
    id: string;
    type: string;
    linkType: string;
  };
}
interface Sys {
  space: ChildSys;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: ChildSys;
  revision: number;
  contentType: ChildSys;
  locale: string;
}
interface MetaData {
  tags: ChildSys[];
}
interface FileDetail {
  size: number;
  image?: {
    width: number;
    height: number;
  };
}
interface File {
  url: string;
  details: FileDetail;
  filename: string;
  contentType: string;
}
interface ImageFields {
  title: string;
  file: File;
}
interface Image {
  fields: ImageFields;
  metadata: MetaData;
  sys: Sys;
}
interface ItemFields {
  publishedAt: string;
  headerImage: Image;
  thumbnail: Image;
  slug: string;
  title: string;
  description: string;
  body: string;
  recommend: any[];
}
interface Item {
  fields: ItemFields;
  metadata: MetaData;
  sys: Sys;
}
interface Entries {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: Item[];
}

export interface CardItem {
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
  category: string;
  slug: string;
  title: string;
  thumbnail: {
    url: string;
    width?: number;
    height?: number;
  };
  tags: string[];
}

export interface Article {
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
  category: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  headerImage: {
    url: string;
    width?: number;
    height?: number;
  };
  tags: string[];
  recommend: CardItem[];
}

export enum Categories {
  programming = 'programming',
  gadget = 'gadget',
  other = 'other',
}
export function entriesItemFilter(item: { fields: any }) {
  const data = item.fields;
  if (data.headerImage && data.thumbnail && data.title && data.description && data.body) {
    return true;
  }
}
export function formatEntriesItemAsCard(items: Item[]): CardItem[] {
  if (!items) {
    return [];
  }
  return items.map((item) => {
    const fieldData: ItemFields = item.fields;
    const thumbnail: File = fieldData.thumbnail.fields.file;
    const thumbnailImageSize = thumbnail.details.image;
    return {
      category: item.sys.contentType.sys.id,
      slug: fieldData.slug,
      title: fieldData.title,
      thumbnail: {
        url: thumbnail.url,
        width: thumbnailImageSize?.width,
        height: thumbnailImageSize?.height,
      },
      publishedAt: fieldData.publishedAt,
      updatedAt: item.sys.updatedAt,
      createdAt: item.sys.createdAt,
      tags: item.metadata.tags.map((tag) => {
        return tag.sys.id;
      }),
    };
  });
}

export function formatEntry(item: Item): Article {
  const fieldData: ItemFields = item.fields;
  const headerImage: File = fieldData.headerImage.fields.file;
  const headerImageSize = headerImage.details.image;
  return {
    publishedAt: fieldData.publishedAt,
    updatedAt: item.sys.updatedAt,
    createdAt: item.sys.createdAt,
    category: item.sys.contentType.sys.id,
    slug: fieldData.slug,
    title: fieldData.title,
    description: fieldData.description,
    body: fieldData.body,
    headerImage: {
      url: headerImage.url,
      width: headerImageSize?.width,
      height: headerImageSize?.height,
    },
    tags: item.metadata.tags.map((tag) => {
      return tag.sys.id;
    }),
    recommend: formatEntriesItemAsCard(fieldData.recommend),
  };
}

export function getEntriesByCategoryRequest(category: Categories, locale: string, limit: number) {
  const query: any = {
    content_type: category,
    locale,
    // 'fields.title[exists]': true,
    order: '-fields.publishedAt',
  };
  query.limit = limit > 0 ? limit : 1000;
  return client.getEntries(query);
}

export function getEntry(category: Categories, locale: string, slug: string): Item {
  const query = {
    content_type: category,
    locale,
    'fields.slug': slug,
  };
  return client
    .getEntries(query)
    .then((entries: Entries) => {
      if (entries.items.length === 1) {
        return formatEntry(entries.items[0]);
      } else {
        return null;
      }
    })
    .catch(() => {
      return null;
    });
}

export function getEntriesByCategory(
  category: Categories,
  locale: string,
  limit: number = 3,
): CardItem[] {
  return getEntriesByCategoryRequest(category, locale, limit)
    .then((entries: Entries) => {
      const data = formatEntriesItemAsCard(entries.items);
      return data;
    })
    .catch(() => {
      return [];
    });
}
