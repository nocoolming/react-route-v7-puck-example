import type { ComponentConfig } from "@measured/puck";

export type ImageBlockProps = {
  src: string;
  alt: string;
  borderRadius: "rounded-none" | "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-full";
  borderWidth: "border-0" | "border" | "border-2" | "border-4" | "border-8";
  borderStyle: "border-solid" | "border-dashed" | "border-dotted";
  borderColor: "border-gray-300" | "border-blue-500" | "border-red-500" | "border-green-500" | "border-yellow-500" | "border-purple-500" | "border-pink-500" | "border-indigo-500" | "border-orange-500" | "border-teal-500";
  width: "w-auto" | "w-full" | "w-1/2" | "w-1/3" | "w-1/4";
  height: "h-auto" | "h-32" | "h-48" | "h-64" | "h-80" | "h-96";
  objectFit: "object-contain" | "object-cover" | "object-fill" | "object-none";
};

export const ImageBlock: ComponentConfig<ImageBlockProps> = {
  fields: {
    src: { type: "text" },
    alt: { type: "text" },
    borderRadius: {
      type: "select",
      options: [
        { label: "无圆角", value: "rounded-none" },
        { label: "小圆角", value: "rounded-sm" },
        { label: "中圆角", value: "rounded-md" },
        { label: "大圆角", value: "rounded-lg" },
        { label: "超大圆角", value: "rounded-xl" },
        { label: "圆形", value: "rounded-full" },
      ],
    },
    borderWidth: {
      type: "select",
      options: [
        { label: "无边框", value: "border-0" },
        { label: "细", value: "border" },
        { label: "中", value: "border-2" },
        { label: "粗", value: "border-4" },
        { label: "超粗", value: "border-8" },
      ],
    },
    borderStyle: {
      type: "select",
      options: [
        { label: "实线", value: "border-solid" },
        { label: "虚线", value: "border-dashed" },
        { label: "点线", value: "border-dotted" },
      ],
    },
    borderColor: {
      type: "select",
      options: [
        { label: "灰色", value: "border-gray-300" },
        { label: "蓝色", value: "border-blue-500" },
        { label: "红色", value: "border-red-500" },
        { label: "绿色", value: "border-green-500" },
        { label: "黄色", value: "border-yellow-500" },
        { label: "紫色", value: "border-purple-500" },
        { label: "粉色", value: "border-pink-500" },
        { label: "靛蓝", value: "border-indigo-500" },
        { label: "橙色", value: "border-orange-500" },
        { label: "青色", value: "border-teal-500" },
      ],
    },
    width: {
      type: "select",
      options: [
        { label: "自动", value: "w-auto" },
        { label: "全宽", value: "w-full" },
        { label: "1/2宽", value: "w-1/2" },
        { label: "1/3宽", value: "w-1/3" },
        { label: "1/4宽", value: "w-1/4" },
      ],
    },
    height: {
      type: "select",
      options: [
        { label: "自动", value: "h-auto" },
        { label: "小", value: "h-32" },
        { label: "中", value: "h-48" },
        { label: "大", value: "h-64" },
        { label: "超大", value: "h-80" },
        { label: "巨大", value: "h-96" },
      ],
    },
    objectFit: {
      type: "select",
      options: [
        { label: "包含", value: "object-contain" },
        { label: "覆盖", value: "object-cover" },
        { label: "填充", value: "object-fill" },
        { label: "无", value: "object-none" },
      ],
    },
  },
  defaultProps: {
    src: "https://via.placeholder.com/400x200",
    alt: "示例图片",
    borderRadius: "rounded-md",
    borderWidth: "border-0",
    borderStyle: "border-solid",
    borderColor: "border-gray-300",
    width: "w-full",
    height: "h-auto",
    objectFit: "object-contain",
  },
  render: ({ src, alt, borderRadius, borderWidth, borderStyle, borderColor, width, height, objectFit }) => {
    const baseClasses = "flex-1 min-w-0 self-start";
    
    let borderClasses = "";
    if (borderWidth !== "border-0") {
      borderClasses = `${borderWidth} ${borderStyle} ${borderColor}`;
    }

    const className = `${baseClasses} ${width} ${height} ${objectFit} ${borderRadius} ${borderClasses}`.trim();

    return (
      <img
        src={src}
        alt={alt}
        className={className}
      />
    );
  },
};