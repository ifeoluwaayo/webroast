import { promises as fs } from "fs";
import puppeteer from "puppeteer-extra";
import { type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { url } = body.data;
  const urlObject = new URL(url);

  if (!url) throw new Error("Invalid request url");

  const browser = await puppeteer.launch();

  try {
    // For mobile
    const mobile = await browser.newPage();
    await mobile.setViewport({
      width: 414, // default: 800
      height: 896, // default: 600
      deviceScaleFactor: 2, // default: 1
    });
    await mobile.goto(url, { waitUntil: "networkidle0" });
    const path = `public/screenshots/mobile/${urlObject.hostname}.png`;
    await mobile.screenshot({
      path,
      fullPage: true,
    });

    // For desktop
    const desktop = await browser.newPage();
    await desktop.setViewport({
      width: 1100, // default: 800
      height: 890, // default: 600
      deviceScaleFactor: 2, // default: 1
    });
    await desktop.goto(url, { waitUntil: "networkidle0" });
    const path2 = `public/screenshots/desktop/${urlObject.hostname}.png`;
    await desktop.screenshot({
      path: path2,
      fullPage: true,
    });

    return Response.json({
      body: {
        mobile: path,
        desktop: path2,
      },
    });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e }, { status: 500 });
  } finally {
    await browser.close();
  }
}
