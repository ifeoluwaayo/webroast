import * as fs from "fs";
import { type NextRequest } from "next/server";
import * as screenshotone from "screenshotone-api-sdk";
import { storage } from "../../../../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import axios from "axios";

const client = new screenshotone.Client(
  process.env.SCREENSHOT_API_KEY as string,
  process.env.SCREENSHOT_SECRET_KEY as string
);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { url, isMobile } = body.data;
  const urlObject = new URL(url);

  if (!url) throw new Error("Invalid request url");

  const options = screenshotone.TakeOptions.url(url)
    .delay(3)
    .blockAds(true)
    .fullPage(true)
    .viewportDevice(isMobile || false ? "iphone_13_pro" : "nexus_10")
    .blockCookieBanners(true);

  const path = `public/screenshots/${
    isMobile || false ? "mobile" : "desktop"
  }/${urlObject.hostname}.png`;

  try {
    // const imageBlob = await client.take(options);
    // const buffer = Buffer.from(await imageBlob.arrayBuffer());
    // fs.writeFileSync(path, buffer);
    const uploadUrl = await uploadImage(urlObject.hostname, path);
    // const uploadUrl = await uploadImage(urlObject.hostname, path);
    console.log("url:", uploadUrl);
    return Response.json({
      body: {
        url: uploadUrl,
        path: path,
      },
    });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e }, { status: 500 });
  }
}

// const uploadImage = async (imageBlob: Blob, name: string, maxAttempts = 3) => {
//   for (let attempt = 0; attempt < maxAttempts; attempt++) {
//     try {
//       const storageRef = ref(storage, `images/${name}.png`);
//       await uploadBytes(storageRef, imageBlob);
//       const downloadURL = await getDownloadURL(storageRef);
//       return downloadURL;
//     } catch (e) {
//       console.error(`Failed to upload image on attempt ${attempt + 1}: ${e}`);
//     }
//   }
// };

const uploadImage = async (name: string, path: string) => {
  const storageRef = ref(storage, `/screenshot/${name}`);
  const response = await axios.get("/screenshotone.com.png", {
    responseType: "blob",
  });
  const file = response.data;
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (err) => {
      return Response.json({ error: err }, { status: 500 });
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        return url;
      });
    }
  );
};

// const browser = await puppeteer.launch();

// try {
//   // For mobile
//   const mobile = await browser.newPage();
//   await mobile.setViewport({
//     width: 414, // default: 800
//     height: 896, // default: 600
//     deviceScaleFactor: 2, // default: 1
//   });
//   await mobile.goto(url, { waitUntil: "networkidle0" });
//   const path = `public/screenshots/mobile/${urlObject.hostname}.png`;
//   await mobile.screenshot({
//     path,
//     fullPage: true,
//   });

//   // For desktop
//   const desktop = await browser.newPage();
//   await desktop.setViewport({
//     width: 1100, // default: 800
//     height: 890, // default: 600
//     deviceScaleFactor: 2, // default: 1
//   });
//   await desktop.goto(url, { waitUntil: "networkidle0" });
//   const path2 = `public/screenshots/desktop/${urlObject.hostname}.png`;
//   await desktop.screenshot({
//     path: path2,
//     fullPage: true,
//   });

//   return Response.json({
//     body: {
//       mobile: path,
//       desktop: path2,
//     },
//   });
// } catch (e) {
//   console.log(e);
//   return Response.json({ error: e }, { status: 500 });
// } finally {
//   await browser.close();
// }
