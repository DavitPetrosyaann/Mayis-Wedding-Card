#!/usr/bin/env node

const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

// Configuration
const SERVICE_ACCOUNT_KEY_PATH =
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH || "./service-account-key.json";
const IMAGES_DIR = path.join(__dirname, "../src/assets/images");
const STORAGE_BUCKET_PATH = "images"; // Folder in Firebase Storage

// Check if service account key exists
if (!fs.existsSync(SERVICE_ACCOUNT_KEY_PATH)) {
  console.error(
    `❌ Service account key not found at: ${SERVICE_ACCOUNT_KEY_PATH}`,
  );
  console.error("Steps to fix:");
  console.error("1. Download your service account key from Firebase Console:");
  console.error(
    "   → Project Settings → Service Accounts → Generate New Private Key",
  );
  console.error(`2. Save it as: ${SERVICE_ACCOUNT_KEY_PATH}`);
  console.error("3. Run this script again");
  process.exit(1);
}

// Initialize Firebase Admin
const serviceAccount = require(path.resolve(SERVICE_ACCOUNT_KEY_PATH));
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: serviceAccount.project_id + ".appspot.com",
  });
}

const bucket = admin.storage().bucket();

async function uploadImages() {
  try {
    if (!fs.existsSync(IMAGES_DIR)) {
      console.error(`❌ Images directory not found: ${IMAGES_DIR}`);
      process.exit(1);
    }

    const files = fs.readdirSync(IMAGES_DIR);
    if (files.length === 0) {
      console.log("⚠️  No images found in", IMAGES_DIR);
      process.exit(0);
    }

    console.log(`📤 Uploading ${files.length} images to Firebase Storage...\n`);

    const uploadedUrls = [];

    for (const file of files) {
      const filePath = path.join(IMAGES_DIR, file);
      const stats = fs.statSync(filePath);

      if (!stats.isFile()) continue;

      const storagePath = `${STORAGE_BUCKET_PATH}/${file}`;

      try {
        await bucket.upload(filePath, {
          destination: storagePath,
          metadata: {
            cacheControl: "public, max-age=2592000", // 30 days
          },
        });

        const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/${serviceAccount.project_id}.appspot.com/o/${encodeURIComponent(storagePath)}?alt=media`;
        uploadedUrls.push({ file, downloadUrl });

        console.log(`✅ ${file}`);
      } catch (error) {
        console.error(`❌ Failed to upload ${file}:`, error.message);
      }
    }

    console.log("\n📋 Upload Summary:");
    console.log(`Total uploaded: ${uploadedUrls.length}/${files.length}`);

    if (uploadedUrls.length > 0) {
      console.log("\n🔗 Firebase Storage URLs:\n");
      uploadedUrls.forEach(({ file, downloadUrl }) => {
        console.log(`${file}:`);
        console.log(`${downloadUrl}\n`);
      });

      // Save URLs to a config file for reference
      const configFile = path.join(__dirname, "../.firebase-image-urls.json");
      fs.writeFileSync(
        configFile,
        JSON.stringify(
          {
            bucket: `${serviceAccount.project_id}.appspot.com`,
            baseUrl: `https://firebasestorage.googleapis.com/v0/b/${serviceAccount.project_id}.appspot.com/o/images`,
            images: uploadedUrls,
          },
          null,
          2,
        ),
      );

      console.log(`\n💾 URLs saved to: .firebase-image-urls.json`);
      console.log("\n📝 Add this to your .env.local:\n");
      console.log(
        `VITE_FIREBASE_STORAGE_BASE_URL="https://firebasestorage.googleapis.com/v0/b/${serviceAccount.project_id}.appspot.com/o/images"`,
      );
    }

    process.exit(0);
  } catch (error) {
    console.error("❌ Error during upload:", error);
    process.exit(1);
  }
}

// Run the upload
uploadImages();
