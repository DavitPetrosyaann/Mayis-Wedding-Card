export const previewMetaDefaults = {
  title: "Մայիս և Գոհար",
  description: "Մայիս և Գոհարի հարսանյաց հրավերը՝ 20.06.2026",
  siteName: "preZento",
  imageWidth: 1200,
  imageHeight: 630,
  fallbackUrl: "https://prezento.com/projects/mayisi-nshandreq/",
  fallbackImagePath: "/preview.jpg",
};

function normalizeAbsoluteUrl(value, fallback) {
  const candidate = value || fallback;

  try {
    return new URL(candidate).toString();
  } catch {
    return new URL(fallback).toString();
  }
}

export function buildPreviewMeta({
  publicProjectUrl,
  publicPreviewImageUrl,
} = {}) {
  const url = normalizeAbsoluteUrl(
    publicProjectUrl,
    previewMetaDefaults.fallbackUrl,
  );
  const image = normalizeAbsoluteUrl(
    publicPreviewImageUrl,
    new URL(previewMetaDefaults.fallbackImagePath, url).toString(),
  );

  return {
    title: previewMetaDefaults.title,
    description: previewMetaDefaults.description,
    image,
    url,
    siteName: previewMetaDefaults.siteName,
    imageWidth: previewMetaDefaults.imageWidth,
    imageHeight: previewMetaDefaults.imageHeight,
  };
}
