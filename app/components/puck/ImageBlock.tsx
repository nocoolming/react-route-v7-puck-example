import type { ComponentConfig } from "@measured/puck";

export type ImageBlockProps = {
  src: string;
  alt: string;
  borderRadius: "none" | "sm" | "md" | "lg" | "xl" | "full";
  showBorder: boolean;
  borderStyle: "solid" | "dashed" | "dotted";
  borderWidth: "1" | "2" | "4" | "8";
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
        { label: "细 (1px)", value: "1" },
        { label: "中 (2px)", value: "2" },
        { label: "粗 (4px)", value: "4" },
        { label: "超粗 (8px)", value: "8" },
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
    borderWidth: "1",
    borderColor: "gray",
    width: "full",
    height: "auto",
    objectFit: "contain",
  },
  render: ({ src, alt, borderRadius, showBorder, borderStyle, borderWidth, borderColor, width, height, objectFit }) => {
    // 圆角类名映射
    const radiusClasses = {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    };

    // 边框宽度类名映射
    const borderWidthClasses = {
      "1": "border",
      "2": "border-2", 
      "4": "border-4",
      "8": "border-8",
    };

    // 边框样式类名映射
    const borderStyleClasses = {
      solid: "",
      dashed: "border-dashed",
      dotted: "border-dotted",
    };

    // 边框颜色类名映射
    const borderColorClasses = {
      gray: "border-gray-300",
      blue: "border-blue-500",
      red: "border-red-500", 
      green: "border-green-500",
      yellow: "border-yellow-500",
      purple: "border-purple-500",
    };

    // 宽度类名映射
    const widthClasses = {
      auto: "w-auto",
      full: "w-full",
      "1/2": "w-1/2",
      "1/3": "w-1/3", 
      "1/4": "w-1/4",
    };

    // 高度类名映射
    const heightClasses = {
      auto: "h-auto",
      "32": "h-32",
      "48": "h-48",
      "64": "h-64",
      "80": "h-80",
      "96": "h-96",
    };

    // 对象适应类名映射
    const objectFitClasses = {
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      none: "object-none",
    };

    // 构建类名
    const baseClasses = "flex-1 min-w-0 self-start";
    const radiusClass = radiusClasses[borderRadius];
    const widthClass = widthClasses[width as keyof typeof widthClasses] || "w-full";
    const heightClass = heightClasses[height as keyof typeof heightClasses] || "h-auto";
    const objectFitClass = objectFitClasses[objectFit as keyof typeof objectFitClasses] || "object-contain";
    
    let borderClasses = "";
    if (showBorder) {
      const borderWidthClass = borderWidthClasses[borderWidth];
      const styleClass = borderStyleClasses[borderStyle];
      const colorClass = borderColorClasses[borderColor];
      borderClasses = `${borderWidthClass} ${styleClass} ${colorClass}`.trim();
    }
    
    const finalClassName = `${baseClasses} ${widthClass} ${heightClass} ${objectFitClass} ${radiusClass} ${borderClasses}`.trim();

    return (
      <img
        src={src}
        alt={alt}
        className={finalClassName}
      />
    );
  },
};