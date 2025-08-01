import type { ComponentConfig } from "@measured/puck";

export type HeroSectionProps = {
  backgroundImage?: string;
  backgroundColor?: "bg-blue-800" | "bg-purple-800" | "bg-green-800" | "bg-red-800" | "bg-orange-800" | "bg-pink-800" | "bg-cyan-800" | "bg-gray-800" | "bg-black" | "bg-indigo-800" | "bg-yellow-800" | "bg-teal-800";
  height?: "h-72" | "h-96" | "h-[500px]" | "h-[600px]";
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  textAlign?: "text-left" | "text-center" | "text-right";
  padding?: "px-4" | "px-6" | "px-8" | "px-12";
  margin?: "my-0" | "my-2" | "my-4" | "my-8";
};

export const HeroSection: ComponentConfig<HeroSectionProps> = {
  fields: {
    backgroundImage: { type: "text" },
    backgroundColor: {
      type: "select",
      options: [
        { label: "深蓝色", value: "bg-blue-800" },
        { label: "紫色", value: "bg-purple-800" },
        { label: "绿色", value: "bg-green-800" },
        { label: "红色", value: "bg-red-800" },
        { label: "橙色", value: "bg-orange-800" },
        { label: "粉色", value: "bg-pink-800" },
        { label: "青色", value: "bg-cyan-800" },
        { label: "灰色", value: "bg-gray-800" },
        { label: "黑色", value: "bg-black" },
        { label: "靛蓝色", value: "bg-indigo-800" },
        { label: "黄色", value: "bg-yellow-800" },
        { label: "蓝绿色", value: "bg-teal-800" },
      ],
    },
    height: {
      type: "select",
      options: [
        { label: "小", value: "h-72" },
        { label: "中", value: "h-96" },
        { label: "大", value: "h-[500px]" },
        { label: "超大", value: "h-[600px]" },
      ],
    },
    title: { type: "text" },
    subtitle: { type: "textarea" },
    buttonText: { type: "text" },
    buttonLink: { type: "text" },
    textAlign: {
      type: "select",
      options: [
        { label: "left", value: "text-left" },
        { label: "center", value: "text-center" },
        { label: "right", value: "text-right" },
      ],
    },
    padding: {
      type: "select",
      options: [
        { label: "小", value: "px-4" },
        { label: "中", value: "px-6" },
        { label: "大", value: "px-8" },
        { label: "超大", value: "px-12" },
      ],
    },
    margin: {
      type: "select",
      options: [
        { label: "无", value: "my-0" },
        { label: "小", value: "my-2" },
        { label: "中", value: "my-4" },
        { label: "大", value: "my-8" },
      ],
    },
  },
  defaultProps: {
    backgroundImage: "https://via.placeholder.com/1200x600/1e40af/ffffff?text=Hero+Background",
    backgroundColor: "bg-blue-800",
    height: "h-[500px]",
    title: "欢迎来到我们的网站",
    subtitle: "这里是副标题，可以描述您的产品或服务的核心价值",
    buttonText: "立即开始",
    buttonLink: "#",
    textAlign: "text-center",
    padding: "px-8",
    margin: "my-4",
  },
  render: ({
    backgroundImage,
    backgroundColor,
    height,
    title,
    subtitle,
    buttonText,
    buttonLink,
    textAlign,
    padding,
    margin
  }) => {
    const baseHeroClasses = "relative flex items-center justify-center bg-cover bg-center bg-no-repeat";
    const heroClassName = `${baseHeroClasses} ${height} ${backgroundColor} ${margin}`.trim();

    const baseContentClasses = "relative z-10 text-white max-w-3xl py-6";
    const contentClassName = `${baseContentClasses} ${padding} ${textAlign}`;

    const divProps = backgroundImage
      ? {
        className: heroClassName,
        style: { backgroundImage: `url(${backgroundImage})` }
      }
      : { className: heroClassName };

    return (
      <div {...divProps}>

        <div className={contentClassName}>
          {title && (
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              {subtitle}
            </p>
          )}
          {buttonText && buttonLink && (
            <a
              href={buttonLink}
              className="inline-block px-8 py-4 bg-white text-gray-800 no-underline rounded text-lg font-semibold transition-all duration-300 hover:bg-gray-100"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    );
  },
};