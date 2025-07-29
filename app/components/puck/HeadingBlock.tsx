import type { ComponentConfig } from "@measured/puck";

export type HeadingBlockProps = {
  title: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  textAlign: "left" | "center" | "right";
  color: "black" | "gray" | "blue" | "red" | "green" | "purple";
  fontWeight: "normal" | "medium" | "semibold" | "bold";
};

export const HeadingBlock: ComponentConfig<HeadingBlockProps> = {
  fields: {
    title: { type: "text" },
    level: {
      type: "select",
      options: [
        { label: "H1 - 主标题", value: 1 },
        { label: "H2 - 副标题", value: 2 },
        { label: "H3 - 三级标题", value: 3 },
        { label: "H4 - 四级标题", value: 4 },
        { label: "H5 - 五级标题", value: 5 },
        { label: "H6 - 六级标题", value: 6 },
      ],
    },
    textAlign: {
      type: "select",
      options: [
        { label: "左对齐", value: "left" },
        { label: "居中", value: "center" },
        { label: "右对齐", value: "right" },
      ],
    },
    color: {
      type: "select",
      options: [
        { label: "黑色", value: "black" },
        { label: "灰色", value: "gray" },
        { label: "蓝色", value: "blue" },
        { label: "红色", value: "red" },
        { label: "绿色", value: "green" },
        { label: "紫色", value: "purple" },
      ],
    },
    fontWeight: {
      type: "select",
      options: [
        { label: "正常", value: "normal" },
        { label: "中等", value: "medium" },
        { label: "半粗", value: "semibold" },
        { label: "粗体", value: "bold" },
      ],
    },
  },
  defaultProps: {
    title: "标题",
    level: 1,
    textAlign: "left",
    color: "black",
    fontWeight: "bold",
  },
  render: ({ title, level, textAlign, color, fontWeight }) => {
    // 文本大小类名映射
    const sizeClasses = {
      1: "text-4xl",
      2: "text-3xl",
      3: "text-2xl",
      4: "text-xl",
      5: "text-lg",
      6: "text-base",
    };

    // 文本对齐类名映射
    const alignClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    };

    // 颜色类名映射
    const colorClasses = {
      black: "text-black",
      gray: "text-gray-600",
      blue: "text-blue-600",
      red: "text-red-600",
      green: "text-green-600",
      purple: "text-purple-600",
    };

    // 字重类名映射
    const weightClasses = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    };

    const className = [
      sizeClasses[level],
      alignClasses[textAlign],
      colorClasses[color],
      weightClasses[fontWeight],
      "my-2"
    ].join(" ");

    const headingProps = { className };

    switch (level) {
      case 1:
        return <h1 {...headingProps}>{title}</h1>;
      case 2:
        return <h2 {...headingProps}>{title}</h2>;
      case 3:
        return <h3 {...headingProps}>{title}</h3>;
      case 4:
        return <h4 {...headingProps}>{title}</h4>;
      case 5:
        return <h5 {...headingProps}>{title}</h5>;
      case 6:
        return <h6 {...headingProps}>{title}</h6>;
      default:
        return <h1 {...headingProps}>{title}</h1>;
    }
  },
};