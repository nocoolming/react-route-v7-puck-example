import type { ComponentConfig } from "@measured/puck";

export type HeadingBlockProps = {
  title: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  textAlign: "text-left" | "text-center" | "text-right";
  color: "text-black" | "text-gray-600" | "text-blue-600" | "text-red-600" | "text-green-600" | "text-purple-600" | "text-pink-600" | "text-indigo-600" | "text-orange-600" | "text-teal-600" | "text-yellow-600";
  fontWeight: "font-normal" | "font-medium" | "font-semibold" | "font-bold";
  size: "text-4xl" | "text-3xl" | "text-2xl" | "text-xl" | "text-lg" | "text-base";
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
        { label: "left", value: "text-left" },
        { label: "center", value: "text-center" },
        { label: "right", value: "text-right" },
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
    size: {
      type: "select",
      options: [
        { label: "超大", value: "text-4xl" },
        { label: "大", value: "text-3xl" },
        { label: "中大", value: "text-2xl" },
        { label: "中", value: "text-xl" },
        { label: "小", value: "text-lg" },
        { label: "超小", value: "text-base" },
      ],
    },
  },
  defaultProps: {
    title: "标题",
    level: 1,
    textAlign: "text-left",
    color: "text-black",
    fontWeight: "font-bold",
    size: "text-4xl",
  },
  render: ({ title, level, textAlign, color, fontWeight, size }) => {
    const className = `my-2 ${size} ${textAlign} ${color} ${fontWeight}`.trim();

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