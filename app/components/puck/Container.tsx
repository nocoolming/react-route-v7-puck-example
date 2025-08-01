import type { ComponentConfig } from "@measured/puck";
import { DropZone } from "@measured/puck";

export type ContainerProps = {
  layoutType: "flex" | "grid";
  flexDirection?: "flex-row" | "flex-col";
  justifyContent?: "justify-start" | "justify-center" | "justify-end" | "justify-between";
  alignItems?: "items-start" | "items-center" | "items-end" | "items-stretch";
  gridRows?: "grid-rows-1" | "grid-rows-2" | "grid-rows-3" | "grid-rows-4" | "grid-rows-5" | "grid-rows-6";
  gridColumns?: "grid-cols-1" | "grid-cols-2" | "grid-cols-3" | "grid-cols-4" | "grid-cols-5" | "grid-cols-6";
  gap?: "gap-2" | "gap-4" | "gap-6" | "gap-8";
  padding?: "p-0" | "p-2.5" | "p-5" | "p-7.5" | "p-10";
  backgroundColor?: "bg-transparent" | "bg-gray-50" | "bg-white" | "bg-blue-50" | "bg-green-50" | "bg-red-50" | "bg-yellow-50" | "bg-purple-50" | "bg-pink-50" | "bg-indigo-50" | "bg-orange-50" | "bg-teal-50";
  maxWidth?: "max-w-none" | "max-w-sm" | "max-w-md" | "max-w-4xl" | "max-w-6xl" | "max-w-full";
  containerAlign?: "mx-0" | "mx-auto" | "ml-auto" | "mr-auto";
  borderRadius?: "rounded-none" | "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-full";
};

export const Container: ComponentConfig<ContainerProps> = {
  fields: {
    layoutType: {
      type: "select",
      options: [
        { label: "Flex 布局", value: "flex" },
        { label: "Grid 布局", value: "grid" },
      ],
    },
    flexDirection: {
      type: "select",
      options: [
        { label: "水平排列", value: "flex-row" },
        { label: "垂直排列", value: "flex-col" },
      ],
    },
    justifyContent: {
      type: "select",
      options: [
        { label: "left", value: "justify-start" },
        { label: "center", value: "justify-center" },
        { label: "right", value: "justify-end" },
        { label: "between", value: "justify-between" },
      ],
    },
    alignItems: {
      type: "select",
      options: [
        { label: "顶部对齐", value: "items-start" },
        { label: "居中对齐", value: "items-center" },
        { label: "底部对齐", value: "items-end" },
        { label: "拉伸对齐", value: "items-stretch" },
      ],
    },
    maxWidth: {
      type: "select",
      options: [
        { label: "无限制", value: "max-w-none" },
        { label: "小", value: "max-w-sm" },
        { label: "中", value: "max-w-md" },
        { label: "大", value: "max-w-4xl" },
        { label: "超大", value: "max-w-6xl" },
        { label: "全宽", value: "max-w-full" },
      ],
    },
    containerAlign: {
      type: "select",
      options: [
        { label: "left", value: "mx-0" },
        { label: "center", value: "mx-auto" },
        { label: "right", value: "ml-auto" },
      ],
    },
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
    gridRows: {
      type: "select",
      options: [
        { label: "1行", value: "grid-rows-1" },
        { label: "2行", value: "grid-rows-2" },
        { label: "3行", value: "grid-rows-3" },
        { label: "4行", value: "grid-rows-4" },
        { label: "5行", value: "grid-rows-5" },
        { label: "6行", value: "grid-rows-6" },
      ],
    },
    gridColumns: {
      type: "select",
      options: [
        { label: "1列", value: "grid-cols-1" },
        { label: "2列", value: "grid-cols-2" },
        { label: "3列", value: "grid-cols-3" },
        { label: "4列", value: "grid-cols-4" },
        { label: "5列", value: "grid-cols-5" },
        { label: "6列", value: "grid-cols-6" },
      ],
    },
    gap: {
      type: "select",
      options: [
        { label: "小", value: "gap-2" },
        { label: "中", value: "gap-4" },
        { label: "大", value: "gap-6" },
        { label: "超大", value: "gap-8" },
      ],
    },
    padding: {
      type: "select",
      options: [
        { label: "无", value: "p-0" },
        { label: "小", value: "p-2.5" },
        { label: "中", value: "p-5" },
        { label: "大", value: "p-7.5" },
        { label: "超大", value: "p-10" },
      ],
    },
    backgroundColor: {
      type: "select",
      options: [
        { label: "无背景", value: "bg-transparent" },
        { label: "浅灰", value: "bg-gray-50" },
        { label: "白色", value: "bg-white" },
        { label: "浅蓝", value: "bg-blue-50" },
        { label: "浅绿", value: "bg-green-50" },
        { label: "浅红", value: "bg-red-50" },
        { label: "浅黄", value: "bg-yellow-50" },
        { label: "浅紫", value: "bg-purple-50" },
        { label: "浅粉", value: "bg-pink-50" },
        { label: "浅靛蓝", value: "bg-indigo-50" },
        { label: "浅橙", value: "bg-orange-50" },
        { label: "浅青", value: "bg-teal-50" },
      ],
    },
  },
  defaultProps: {
    layoutType: "flex",
    flexDirection: "flex-row",
    justifyContent: "justify-start",
    alignItems: "items-start",
    gridRows: "grid-rows-2",
    gridColumns: "grid-cols-2",
    gap: "gap-4",
    padding: "p-5",
    backgroundColor: "bg-transparent",
    maxWidth: "max-w-none",
    containerAlign: "mx-0",
    borderRadius: "rounded-md",
  },
  render: ({ layoutType, flexDirection, justifyContent, alignItems, gridRows, gridColumns, gap, padding, backgroundColor, maxWidth, containerAlign, borderRadius }) => {
    let baseClasses = "my-4";
    
    // 布局类型
    if (layoutType === "flex") {
      baseClasses += " flex flex-wrap";
      
      // 默认响应式布局：flex-col md:flex-row
      if (flexDirection === "flex-row") {
        baseClasses += " flex-col md:flex-row";
      } else if (flexDirection) {
        baseClasses += ` ${flexDirection}`;
      }
    } else {
      baseClasses += " grid";
    }

    const className = `${baseClasses} ${maxWidth} ${containerAlign} ${justifyContent} ${alignItems} ${gridRows} ${gridColumns} ${gap} ${padding} ${backgroundColor} ${borderRadius}`.trim();



    return (
      <DropZone
        zone="container-content"
        className={className}
        allow={[
          'HeadingBlock',
          'TextBlock',
          'ImageBlock',
          'ImageSlide',
          'Container',
          'HeroSection',
          'Button',
          'Spacer',
          'Divider',
          'Columns'
        ]}
      />
    );
  },
};