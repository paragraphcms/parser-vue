import {
  inferParagraphContentFormat as coreInferParagraphContentFormat,
  renderParagraphContentHtml as coreRenderParagraphContentHtml,
  renderParagraphDocumentHtml as coreRenderParagraphDocumentHtml,
  resolveParagraphContentInput as coreResolveParagraphContentInput,
  resolveParagraphRootClassName as coreResolveParagraphRootClassName,
  resolveParagraphSlotClassName as coreResolveParagraphSlotClassName,
} from "@paragraphcms/parser-core";
import type {
  ParagraphComponentSlot,
  ParagraphContentFormat,
  ParagraphContentInput,
  ParagraphContentProps,
  ParagraphPageContent,
  ParagraphRenderOptions,
} from "./types.js";

export function resolveParagraphContentInput<
  TFields = Record<string, unknown>,
>(input: ParagraphContentInput<TFields>) {
  return coreResolveParagraphContentInput(input) as {
    content: ParagraphPageContent | null;
    contentFormat: ParagraphContentFormat | null;
  };
}

export function inferParagraphContentFormat(
  content: ParagraphPageContent,
  explicitFormat: ParagraphContentFormat | null = null,
) {
  return coreInferParagraphContentFormat(
    content,
    explicitFormat,
  ) as ParagraphContentFormat;
}

export function resolveParagraphSlotClassName(
  slot: ParagraphComponentSlot,
  className: string | undefined,
  options: ParagraphRenderOptions = {},
) {
  return coreResolveParagraphSlotClassName(
    slot,
    className,
    options,
  ) as string | undefined;
}

export function resolveParagraphRootClassName(
  className: string | undefined,
  options: ParagraphRenderOptions = {},
) {
  return coreResolveParagraphRootClassName(
    className,
    options,
  ) as string | undefined;
}

export function renderParagraphContentHtml<
  TFields = Record<string, unknown>,
>(input: ParagraphContentInput<TFields> & ParagraphRenderOptions) {
  return coreRenderParagraphContentHtml(input) as string | null;
}

export function renderParagraphDocumentHtml<
  TFields = Record<string, unknown>,
>(
  input: ParagraphContentProps<TFields> & {
    className?: string;
  },
) {
  return coreRenderParagraphDocumentHtml(input) as string | null;
}
