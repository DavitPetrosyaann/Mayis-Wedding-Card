import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { buildPreviewMeta } from "./src/previewMeta.constants.js";

function escapeHtmlAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // If a direct preview image URL isn't provided, but a Firebase storage base URL
  // is set, use the project's first image (cover) as the preview image.
  let publicPreviewImageUrl = env.VITE_PUBLIC_PREVIEW_IMAGE_URL;
  if (!publicPreviewImageUrl && env.VITE_FIREBASE_STORAGE_BASE_URL) {
    publicPreviewImageUrl = `${env.VITE_FIREBASE_STORAGE_BASE_URL.replace(/\/$/, "")}/dzerqer.JPG`;
  }

  const previewMeta = buildPreviewMeta({
    publicProjectUrl: env.VITE_PUBLIC_PROJECT_URL,
    publicPreviewImageUrl: publicPreviewImageUrl,
  });

  const replacements = {
    PREVIEW_TITLE: previewMeta.title,
    PREVIEW_DESCRIPTION: previewMeta.description,
    PREVIEW_IMAGE: previewMeta.image,
    PREVIEW_IMAGE_WIDTH: previewMeta.imageWidth,
    PREVIEW_IMAGE_HEIGHT: previewMeta.imageHeight,
    PREVIEW_URL: previewMeta.url,
    PREVIEW_SITE_NAME: previewMeta.siteName,
  };

  return {
    assetsInclude: [
      "**/*.JPG",
      "**/*.JPEG",
      "**/*.PNG",
      "**/*.WEBP",
      "**/*.AVIF",
    ],
    cacheDir: ".vite-cache",
    optimizeDeps: {
      include: ["framer-motion"],
    },
    resolve: {
      alias: {
        "framer-motion": "framer-motion/dist/framer-motion",
      },
    },
    plugins: [
      react(),
      {
        name: "preview-meta-html",
        transformIndexHtml(html) {
          return Object.entries(replacements).reduce(
            (result, [key, value]) =>
              result.replaceAll(`%${key}%`, escapeHtmlAttribute(value)),
            html,
          );
        },
      },
    ],
  };
});
