import type { ComponentConfig } from "@measured/puck";

export type TextBlockProps = {
  text: string;
  textAlign: "text-left" | "text-center" | "text-right" | "text-justify";
  fontSize: "text-sm" | "text-base" | "text-lg" | "text-xl";
  color: "text-black" | "text-gray-600" | "text-blue-600" | "text-red-600" | "text-green-600" | "text-purple-600" | "text-pink-600" | "text-indigo-600" | "text-orange-600" | "text-teal-600" | "text-yellow-600";
  fontWeight: "font-normal" | "font-medium" | "font-semibold" | "font-bold";
  lineHeight: "leading-tight" | "leading-normal" | "leading-relaxed" | "leading-loose";
};

export const TextBlock: ComponentConfig<TextBlockProps> = {
  fields: {
    text: { type: "textarea" },
    textAlign: {
      type: "select",
      options: [
        { label: "left", value: "text-left" },
        { label: "center", value: "text-center" },
        { label: "right", value: "text-right" },
        { label: "justify", value: "text-justify" },
      ],
    },
    fontSize: {
      type: "select",
      options: [
        { label: "小", value: "text-sm" },
        { label: "正常", value: "text-base" },
        { label: "大", value: "text-lg" },
        { label: "超大", value: "text-xl" },
      ],
    },
    color: {
      type: "select",
      options: [
        { label: "黑色", value: "text-black" },
        { label: "灰色", value: "text-gray-600" },
        { label: "蓝色", value: "text-blue-600" },
        { label: "红色", value: "text-red-600" },
        { label: "绿色", value: "text-green-600" },
        { label: "紫色", value: "text-purple-600" },
        { label: "粉色", value: "text-pink-600" },
        { label: "靛蓝", value: "text-indigo-600" },
        { label: "橙色", value: "text-orange-600" },
        { label: "青色", value: "text-teal-600" },
        { label: "黄色", value: "text-yellow-600" },
      ],
    },
    fontWeight: {
      type: "select",
      options: [
        { label: "正常", value: "font-normal" },
        { label: "中等", value: "font-medium" },
        { label: "半粗", value: "font-semibold" },
        { label: "粗体", value: "font-bold" },
      ],
    },
    lineHeight: {
      type: "select",
      options: [
        { label: "紧密", value: "leading-tight" },
        { label: "正常", value: "leading-normal" },
        { label: "宽松", value: "leading-relaxed" },
        { label: "超宽松", value: "leading-loose" },
      ],
    },
  },
  defaultProps: {
    text: "这里是文本内容...",
    textAlign: "text-left",
    fontSize: "text-base",
    color: "text-black",
    fontWeight: "font-normal",
    lineHeight: "leading-relaxed",
  },
  render: ({ text, textAlign, fontSize, color, fontWeight, lineHeight }) => {
    const className = `my-2 ${textAlign} ${fontSize} ${color} ${fontWeight} ${lineHeight}`.trim();

    return (
      <p className={className}>
        {text}
      </p>
    );
  },
};