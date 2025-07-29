import { useState, useEffect } from "react";
import { Render } from "@measured/puck";
import type { Data } from "@measured/puck";
import config from "../puck.config";

// 默认数据
const defaultData: Data = {
  content: [
    {
      type: "HeadingBlock",
      props: {
        title: "预览页面",
      },
    },
    {
      type: "TextBlock",
      props: {
        text: "没有找到保存的数据，请先在编辑器中创建内容。",
      },
    },
  ],
  root: {
    props: {
      title: "预览页面",
    },
  },
};

export default function PuckPreview() {
  const [data, setData] = useState<Data>(defaultData);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("puck-data");
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          setData(parsedData);
        } catch (error) {
          console.error("解析数据失败:", error);
        }
      }
    }
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/* 导航按钮 */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <a
          href="/puck-editor"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            marginRight: "10px",
          }}
        >
          返回编辑器
        </a>
        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#6c757d",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          返回首页
        </a>
      </div>

      <hr style={{ margin: "20px 0" }} />

      {/* 渲染内容 */}
      <Render config={config} data={data} />
    </div>
  );
}