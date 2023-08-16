import { Box, Modal, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";

export interface News {
  headline: string;
  tagline?: string;
  author?: string;
  date?: string;
  text: string;
  image?: any;
}

export default function (news: News) {
  const [openNews, setOpenNews] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div
      onClick={() => setOpenNews(true)}
      style={{
        margin: "3rem",
        fontFamily: "serif",
        maxHeight: isMobile ? "50vh" : "20vh",
        overflowY: "hidden",
        border: "1px solid",
        borderRadius: "1rem",
        borderColor: "grey",
        cursor: "pointer",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Modal
        open={openNews}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            borderRadius: "2rem",
            backgroundColor: "white",
            maxHeight: "80vh",
            margin: "1rem",
            overflowY: "scroll",
          }}
        >
          <img style={{ width: "100%" }} src={news.image} />
          <Box style={{ padding: "2rem" }}>
            <h1>{news.headline}</h1>
            <h2>{news.tagline}</h2>
            <p>{news.text}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                fontSize: "",
                color: "grey",
              }}
            >
              <p>{news.author}</p>
              <p style={{ float: "right" }}>{news.date}</p>
            </div>
          </Box>
        </Box>
      </Modal>
      <img
        style={{
          height: "20vh",
        }}
        src={news.image}
      />
      <div
        style={{
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          paddingInline: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <h1>{news.headline}</h1>
        <h2 style={{ color: "grey", fontStyle: "italic" }}>{news.tagline}</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <p style={{ whiteSpace: "break-spaces" }}>{news.text}</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            fontSize: "",
            color: "grey",
          }}
        >
          <p>{news.author}</p>
          <p style={{ float: "right" }}>{news.date}</p>
        </div>
      </div>
    </div>
  );
}
