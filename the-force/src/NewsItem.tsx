import React, { FC } from "react";

export interface News {
  headline: string;
  tagline?: string;
  author?: string;
  date?: string;
  text: string;
  image?: any;
}

export default function (news: News) {
  return (
    <div style={{ margin: "5rem", fontFamily: "serif" }}>
      <h1>{news.headline}</h1>
      <h2>{news.tagline}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          fontSize: "",
        }}
      >
        <p>{news.author}</p>
        <p style={{ float: "right" }}>{news.date}</p>
      </div>
      <p>{news.text}</p>
    </div>
  );
}
