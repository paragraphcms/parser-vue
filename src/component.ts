import {
  computed,
  defineComponent,
  h,
  normalizeClass,
  toValue,
  type MaybeRefOrGetter,
  type PropType,
} from "vue";
import {
  renderParagraphContentHtml,
  resolveParagraphRootClassName,
} from "./renderer.js";
import type {
  ParagraphClassNames,
  ParagraphContentFormat,
  ParagraphContentInput,
  ParagraphContentProps,
  ParagraphPageContent,
  ParagraphRenderablePage,
  ParagraphRenderOptions,
} from "./types.js";

export const ParagraphContent = defineComponent({
  name: "ParagraphContent",
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "article",
    },
    page: {
      type: Object as PropType<ParagraphRenderablePage | null>,
      default: null,
    },
    content: {
      type: [String, Array] as PropType<ParagraphPageContent | null>,
      default: null,
    },
    contentFormat: {
      type: String as PropType<ParagraphContentFormat | null>,
      default: null,
    },
    classNames: {
      type: Object as PropType<ParagraphClassNames | undefined>,
      default: undefined,
    },
    markedOptions: {
      type: Object as PropType<ParagraphRenderOptions["markedOptions"]>,
      default: undefined,
    },
    sanitizeOptions: {
      type: Object as PropType<ParagraphRenderOptions["sanitizeOptions"]>,
      default: undefined,
    },
    unstyled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const html = renderParagraphContentHtml(props);

      if (html === null) {
        return null;
      }

      const className = resolveParagraphRootClassName(
        normalizeClass(attrs.class),
        props,
      );

      return h(props.as, {
        ...attrs,
        class: className,
        innerHTML: html,
      });
    };
  },
});

export function useParagraphContent<TFields = Record<string, unknown>>(
  input: MaybeRefOrGetter<ParagraphContentInput<TFields> & ParagraphRenderOptions>,
) {
  return computed(() => renderParagraphContentHtml(toValue(input)));
}

export function createParagraphDocumentHtml<TFields = Record<string, unknown>>(
  input: MaybeRefOrGetter<ParagraphContentProps<TFields>>,
) {
  return computed(() => {
    const value = toValue(input);
    const html = renderParagraphContentHtml(value);

    if (html === null) {
      return null;
    }

    const className = resolveParagraphRootClassName(undefined, value);
    const tagName = typeof value.as === "string" ? value.as : "article";

    return `<${tagName}${
      className ? ` class="${className}"` : ""
    }>${html}</${tagName}>`;
  });
}
