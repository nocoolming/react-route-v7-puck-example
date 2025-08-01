import type { ComponentConfig } from "@measured/puck";

export type ImageBlockProps = {
  src: string;
  alt: string;
  borderRadius: "none" | "sm" | "md" | "lg" | "xl" | "full";
  showBorder: boolean;
  borderStyle: "solid" | "dashed" | "dotted";
  borderWidth: "border" | "border-2" | "border-4" | "border-8";
  borderColor: "gray" | "blue" | "red" | "green" | "yellow" | "purple";
  width: "auto" | "full" | "1/2" | "1/3" | "1/4";
  height: "auto" | "32" | "48" | "64" | "80" | "96";
  objectFit: "contain" | "cover" | "fill" | "none";
};

export const ImageBlock: ComponentConfig<ImageBlockProps> = {
  fields: {
    src: { type: "text" },
    alt: { type: "text" },
    borderRadius: {
      type: "select",
      options: [
        { label: "无圆角", value: "none" },
        { label: "小圆角", value: "sm" },
        { label: "中圆角", value: "md" },
        { label: "大圆角", value: "lg" },
        { label: "超大圆角", value: "xl" },
        { label: "圆形", value: "full" },
      ],
    },
    showBorder: {
      type: "radio",
      options: [
        { label: "显示", value: true },
        { label: "隐藏", value: false },
      ],
    },
    borderStyle: {
      type: "select",
      options: [
        { label: "实线", value: "solid" },
        { label: "虚线", value: "dashed" },
        { label: "点线", value: "dotted" },
      ],
    },
    borderWidth: {
      type: "select",
      options: [
        { label: "细 ", value: "border" },
        { label: "中 ", value: "border-2" },
        { label: "粗", value: "border-4" },
        { label: "超粗 ", value: "border-8" },
      ],
    },
    borderColor: {
      type: "select",
      options: [
        { label: "灰色", value: "gray" },
        { label: "蓝色", value: "blue" },
        { label: "红色", value: "red" },
        { label: "绿色", value: "green" },
        { label: "黄色", value: "yellow" },
        { label: "紫色", value: "purple" },
      ],
    },
    width: {
      type: "select",
      options: [
        { label: "自动", value: "auto" },
        { label: "全宽", value: "full" },
        { label: "1/2宽", value: "1/2" },
        { label: "1/3宽", value: "1/3" },
        { label: "1/4宽", value: "1/4" },
      ],
    },
    height: {
      type: "select",
      options: [
        { label: "自动", value: "auto" },
        { label: "小 (128px)", value: "32" },
        { label: "中 (192px)", value: "48" },
        { label: "大 (256px)", value: "64" },
        { label: "超大 (320px)", value: "80" },
        { label: "巨大 (384px)", value: "96" },
      ],
    },
    objectFit: {
      type: "select",
      options: [
        { label: "包含", value: "contain" },
        { label: "覆盖", value: "cover" },
        { label: "填充", value: "fill" },
        { label: "无", value: "none" },
      ],
    },
  },
  defaultProps: {
    src: "https://via.placeholder.com/400x200",
    alt: "示例图片",
    borderRadius: "none",
    showBorder: false,
    borderStyle: "solid",
    borderWidth: "border",
    borderColor: "gray",
    width: "full",
    height: "auto",
    objectFit: "contain",
  },
  render: ({ src, alt, borderRadius, showBorder, borderStyle, borderWidth, borderColor, width, height, objectFit }) => {
    const radiusClass = borderRadius === "none" ? "" : `rounded-${borderRadius}`;
    const styleClass = borderStyle === "solid" ? "" : `border-${borderStyle}`;
    const colorClass = `border-${borderColor}-${borderColor === "gray" ? "300" : "500"}`;
    
    const borderString = showBorder ? `${borderWidth} ${styleClass} ${colorClass}` : "";
    const className = `flex-1 min-w-0 self-start w-${width} h-${height} object-${objectFit} ${radiusClass} ${borderString}`;

    return (
      <img
        src={src}
        alt={alt}
        className={className}
      />
    );
  },
};