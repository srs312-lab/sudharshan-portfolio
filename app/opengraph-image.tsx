import { ImageResponse } from "next/og";

export const alt = "Sudharshan Soma | Technical Program Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: 88,
          background: "#020617",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", width: 96, height: 6, background: "#cbd5e1", marginBottom: 40 }} />
        <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -3 }}>Sudharshan Soma</div>
        <div style={{ marginTop: 24, fontSize: 38, color: "#cbd5e1" }}>Technical Program Manager</div>
      </div>
    ),
    size,
  );
}
