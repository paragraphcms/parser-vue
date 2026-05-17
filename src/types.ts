import type { MarkedOptions } from "marked";
import type sanitizeHtml from "sanitize-html";

export type ParagraphContentFormat = "markdown" | "html" | "tiptap";

export type ParagraphTiptapMark = {
  type?: string;
  attrs?: Record<string, unknown>;
};

export type ParagraphTiptapNode = {
  type?: string;
  attrs?: Record<string, unknown>;
  text?: string;
  marks?: ParagraphTiptapMark[];
  content?: ParagraphTiptapNode[];
};

export type ParagraphPageContent = string | ParagraphTiptapNode[];

export type ParagraphRenderablePage<TFields = Record<string, unknown>> = {
  content_format?: ParagraphContentFormat | null;
  content?: ParagraphPageContent;
  fields?: TFields;
};

export type ParagraphComponentSlot =
  | "root"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "a"
  | "strong"
  | "em"
  | "u"
  | "s"
  | "blockquote"
  | "code"
  | "pre"
  | "ul"
  | "ol"
  | "li"
  | "hr"
  | "br"
  | "img"
  | "figure"
  | "figcaption"
  | "imageMeta"
  | "imageSlug"
  | "imageAlt"
  | "table"
  | "thead"
  | "tbody"
  | "tr"
  | "th"
  | "td"
  | "faq"
  | "collapsible"
  | "summary"
  | "collapsibleContent"
  | "taskList"
  | "taskItem"
  | "taskCheckbox";

export type ParagraphClassNames = Partial<
  Record<ParagraphComponentSlot, string>
>;

export type ParagraphRenderOptions = {
  classNames?: ParagraphClassNames;
  markedOptions?: MarkedOptions;
  sanitizeOptions?: sanitizeHtml.IOptions;
  unstyled?: boolean;
};

export type ParagraphContentInput<TFields = Record<string, unknown>> = {
  page?: ParagraphRenderablePage<TFields> | null;
  content?: ParagraphPageContent | null;
  contentFormat?: ParagraphContentFormat | null;
};

export type ParagraphContentProps<TFields = Record<string, unknown>> =
  ParagraphRenderOptions & {
    as?: string;
    page?: ParagraphRenderablePage<TFields> | null;
    content?: ParagraphPageContent | null;
    contentFormat?: ParagraphContentFormat | null;
  };
