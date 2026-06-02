import { buildPreviewMeta } from "./previewMeta.constants.js";

const env = import.meta.env || {};

export const previewMeta = buildPreviewMeta({
  publicProjectUrl: env.VITE_PUBLIC_PROJECT_URL,
  publicPreviewImageUrl: env.VITE_PUBLIC_PREVIEW_IMAGE_URL,
});

export function applyMeta(meta) {
  document.title = meta.title;
}

export const previewMetaTodos = [
  "TODO: Add dynamic metadata per route/page.",
  "TODO: Auto-generate preview image later.",
  "TODO: Add fallback image.",
  "TODO: Add structured schema.org metadata.",
  "TODO: Add project category/type tags.",
  "TODO: Optimize preview image size.",
  "TODO: Add cache invalidation for updated previews.",
];
