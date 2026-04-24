import React from "react";
import { Spin } from "antd";

const GlobalLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "var(--body-bg, #f4f7fe)", // Fallback color that matches standard dashboard backgrounds
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Spin size="large" />
      <h3 style={{ color: "var(--text-color, #2b3674)", fontFamily: "inherit", margin: 0, opacity: 0.8 }}>
        Loading Application...
      </h3>
    </div>
  );
};

export default GlobalLoader;
