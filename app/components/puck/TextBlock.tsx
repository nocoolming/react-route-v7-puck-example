import type { ComponentConfig } from "@measured/puck";

export type TextBlockProps = {
  text: string;
  textAlign: "left" | "center" | "right" | "justify";
  fontSize: "sm" | "base" | "lg" | "xl";
  color: "black" | "gray" | "blue" | "red" | "green" | "purple";
  fontWeight: "normal" | "medium" | "semibold" | "bold";
  lineHeight: "tight" | "normal" | "relaxed" | "loose";
};

export const TextBlock: ComponentConfig<TextBlockProps> = {
  fields: {
    text: { type: "textarea" },
    textAlign: {
      type: "select",
      options: [
        { label: "左对齐", value: "left" },
        { label: "居中", value: "center" },
        { label: "右对齐", value: "right" },
        { label: "两端对齐", value: "justify" },
      ],
    },
    fontSize: {
      type: "select",
      options: [
        { label: "小", value: "sm" },
        { label: "正常", value: "base" },
        { label: "大", value: "lg" },
        { label: "超大", value: "xl" },
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
    lineHeight: {
      type: "select",
      options: [
        { label: "紧密", value: "tight" },
        { label: "正常", value: "normal" },
        { label: "宽松", value: "relaxed" },
        { label: "超宽松", value: "loose" },
      ],
    },
  },
  defaultProps: {
    text: "这里是文本内容...",
    textAlign: "left",
    fontSize: "base",
    color: "black",
    fontWeight: "normal",
    lineHeight: "relaxed",
  },
  render: ({ text, textAlign, fontSize, color, fontWeight, lineHeight }) => {
    // 文本对齐类名映射
    const alignClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    };

    // 字体大小类名映射
    const sizeClasses = {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
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

    // 行高类名映射
    const lineHeightClasses = {
      tight: "leading-tight",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    };

    const className = [
      alignClasses[textAlign],
      sizeClasses[fontSize],
      colorClasses[color],
      weightClasses[fontWeight],
      lineHeightClasses[lineHeight],
      "my-2"
    ].join(" ");

    return (
      <p className={className}>
        {text}
      </p>
    );
  },
};