import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { hero, meta } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = meta.title;

const NAVY_DEEP = "#0A1424";
const CREAM = "#FBF8F3";
const GOLD = "#C0A063";
const GOLD_LIGHT = "#D8C395";

/**
 * The link preview is where this site is actually first encountered: a card in
 * a message thread. So the card carries the arch portrait, not a text slab.
 *
 * Fonts are read from src/assets at build time. WOFF, not TTF: the variable
 * TTF builds of both families crash this version of Satori. They never reach a
 * visitor from Google, and nothing here runs at request time.
 */
export default async function OpengraphImage() {
  const assets = path.join(process.cwd(), "src/assets");

  const [cormorant, jost, portrait] = await Promise.all([
    readFile(path.join(assets, "CormorantGaramond-Light.woff")),
    readFile(path.join(assets, "Jost-Medium.woff")),
    readFile(path.join(process.cwd(), "public", "vivien-portrait.jpg")),
  ]);

  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: NAVY_DEEP,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: `1px solid ${GOLD}`,
            opacity: 0.3,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "72px 80px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 660,
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Jost",
                fontSize: 19,
                letterSpacing: 5.5,
                color: GOLD_LIGHT,
                textTransform: "uppercase",
              }}
            >
              {hero.eyebrow}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 26,
                fontFamily: "Cormorant",
                fontSize: 86,
                lineHeight: 1.02,
                letterSpacing: 12,
                color: CREAM,
                textTransform: "uppercase",
              }}
            >
              {meta.name.split(" ").map((part) => (
                <div key={part} style={{ display: "flex" }}>
                  {part}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 34,
                width: 300,
              }}
            >
              <div
                style={{ display: "flex", height: 1, width: 130, backgroundColor: GOLD, opacity: 0.6 }}
              />
              <div
                style={{
                  display: "flex",
                  width: 9,
                  height: 9,
                  backgroundColor: GOLD,
                  transform: "rotate(45deg)",
                  margin: "0 14px",
                }}
              />
              <div
                style={{ display: "flex", height: 1, width: 130, backgroundColor: GOLD, opacity: 0.6 }}
              />
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 34,
                fontFamily: "Jost",
                fontSize: 21,
                lineHeight: 1.6,
                letterSpacing: 0.4,
                color: "rgba(251,248,243,0.75)",
                maxWidth: 620,
              }}
            >
              {hero.roles.join(" · ")}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 30,
                fontFamily: "Jost",
                fontSize: 17,
                letterSpacing: 1.2,
                color: "rgba(251,248,243,0.45)",
              }}
            >
              {hero.footLine}
            </div>
          </div>

          <div style={{ display: "flex", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: -12,
                left: -12,
                right: -12,
                bottom: -12,
                border: `1px solid ${GOLD}`,
                borderRadius: "182px 182px 2px 2px",
                opacity: 0.55,
                display: "flex",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element -- Satori
                renders raw SVG; next/image does not exist in this context. */}
            <img
              alt=""
              src={portraitSrc}
              width={334}
              height={446}
              style={{
                width: 334,
                height: 446,
                objectFit: "cover",
                borderRadius: "167px 167px 2px 2px",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: cormorant, style: "normal", weight: 300 },
        { name: "Jost", data: jost, style: "normal", weight: 500 },
      ],
    },
  );
}
