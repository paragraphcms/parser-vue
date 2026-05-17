import {
  defaultParagraphClassNames as coreDefaultParagraphClassNames,
  defaultParagraphMarkedOptions as coreDefaultParagraphMarkedOptions,
  defaultParagraphSanitizeOptions as coreDefaultParagraphSanitizeOptions,
} from "@paragraphcms/parser-core";
import type { ParagraphClassNames, ParagraphRenderOptions } from "./types.js";

export const defaultParagraphClassNames: ParagraphClassNames =
  coreDefaultParagraphClassNames as ParagraphClassNames;

export const defaultParagraphMarkedOptions: NonNullable<
  ParagraphRenderOptions["markedOptions"]
> = coreDefaultParagraphMarkedOptions;

export const defaultParagraphSanitizeOptions: NonNullable<
  ParagraphRenderOptions["sanitizeOptions"]
> = coreDefaultParagraphSanitizeOptions;
