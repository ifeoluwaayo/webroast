import { type NextRequest } from "next/server";
import * as screenshotone from "screenshotone-api-sdk";
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
    .blockCookieBanners(true)
    .cache(true)
    .cacheTtl(2592000)
    .cacheKey(`${new Date().getTime()}`);

  try {
    const url = await client.generateTakeURL(options);
    const res = await axios.get(url);
    return Response.json({
      body: {
        url: res.headers["x-screenshotone-cache-url"],
      },
    });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e }, { status: 500 });
  }
}
