Steps to store project images in Firebase Storage and configure the app

1) Upload images to Firebase Storage
- Open Firebase Console → Storage → Files.
- Create a folder (e.g., `images/`) and upload the files from `src/assets/images/`.
- For each uploaded file, open the file and click **Open** or **Get download URL** to copy its public URL.

Notes about public access
- By default Firebase Storage files require authorized access. If you want files to be publicly accessible via simple URL, either:
  - Use the file's download URL (the one Firebase shows when you click a file) which includes a token, or
  - Update your Storage Rules to allow read access for unauthenticated users for the path you host (not recommended for private content).

2) Configure Vite environment variables
- Create a `.env` (or `.env.local`) at project root and add either:

# Option A — set the exact preview image URL (recommended)
VITE_PUBLIC_PREVIEW_IMAGE_URL="https://firebasestorage.googleapis.com/v0/b/<bucket>/o/images%2Fdzerqer.JPG?alt=media&token=<token>"

# Option B — set a base URL and the code will append file names
VITE_FIREBASE_STORAGE_BASE_URL="https://firebasestorage.googleapis.com/v0/b/<bucket>/o/images"

If you use Option B, you must provide file names exactly as in `src/event.js` (e.g. `dzerqer.JPG`). For Firebase download URLs with token parameters Option A is simpler.

3) How the code uses these values
- `VITE_PUBLIC_PREVIEW_IMAGE_URL` (if set) becomes the main meta `og:image` used in the built `index.html`.
- If `VITE_PUBLIC_PREVIEW_IMAGE_URL` is not set, the build will fall back to `VITE_FIREBASE_STORAGE_BASE_URL + '/dzerqer.JPG'` as the preview image.
- At runtime, the app will use `VITE_FIREBASE_STORAGE_BASE_URL` (if present) to resolve image URLs for UI elements. If it's not present, local bundled images are used.

4) Build & test
- After setting env vars, run the dev server or build:

npm install
npm run dev
# or build
npm run build

- Verify that the site loads images from Firebase URLs and that the meta preview image (open graph) matches the uploaded cover image.

If you want, I can:
- Help generate a script to upload all images to Storage programmatically,
- Or upload the files for you if you provide Firebase credentials (I won't ask for credentials here).