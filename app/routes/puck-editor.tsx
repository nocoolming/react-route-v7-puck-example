import { useState } from "react";
import { Puck } from "@measured/puck";
import type { Data } from "@measured/puck";
import config from "../puck.config";
import "@measured/puck/puck.css";

// 初始数据
const initialData: Data = {
  content: [
    {
      type: "HeroSection",
      props: {
        id: "hero-1",
        backgroundImage: "https://via.placeholder.com/1200x600/1e40af/ffffff?text=Welcome+Hero",
        backgroundColor: "#1e40af",
        title: "欢迎使用 Puck Editor",
        subtitle: "强大的可视化页面编辑器，让创建网页变得简单",
        buttonText: "开始体验",
        buttonLink: "#demo",
        textAlign: "center",
        overlay: true,
        overlayOpacity: 0.3,
      },
    },
 
  ],
  root: {
    props: {
      title: "演示页面",
    },
  },
};

export default function PuckEditor() {
  const [data, setData] = useState<Data>(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("puck-data");
      if (savedData) {
        try {
          return JSON.parse(savedData);
        } catch (error) {
          console.error("解析数据失败:", error);
        }
      }
    }
    return initialData;
  });

  const handleSave = (newData: Data) => {
    setData(newData);
    if (typeof window !== "undefined") {
      localStorage.setItem("puck-data", JSON.stringify(newData));
      alert("页面已保存！");
    }
  };

  const handlePreview = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("puck-data", JSON.stringify(data));
      window.open("/puck-preview", "_blank");
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <div style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 1000,
        display: "flex",
        gap: "10px"
      }}>
        <button
          onClick={() => handleSave(data)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          保存
        </button>
        <button
          onClick={handlePreview}
          style={{
            padding: "8px 16px",
            backgroundColor: "#17a2b8",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          预览
        </button>
        <a
          href="/"
          style={{
            padding: "8px 16px",
            backgroundColor: "#6c757d",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            display: "inline-block",
          }}
        >
          返回首页
        </a>
      </div>
      <Puck
        config={config}
        data={data}
        onPublish={handleSave}
        onChange={setData}
      />
    </div>
  );
}