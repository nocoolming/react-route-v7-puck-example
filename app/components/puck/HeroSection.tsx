import type { ComponentConfig } from "@measured/puck";

export type HeroSectionProps = {
  backgroundImage?: string;
  backgroundColor?: "blue" | "purple" | "green" | "red" | "orange" | "pink" | "cyan" | "gray" | "black";
  height?: 300 | 400 | 500 | 600;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  textAlign?: "left" | "center" | "right";
  overlay?: boolean;
  overlayOpacity?: 20 | 30 | 40 | 50 | 60;
  padding?: "sm" | "md" | "lg" | "xl";
  margin?: "none" | "sm" | "md" | "lg";
};

export const HeroSection: ComponentConfig<HeroSectionProps> = {
  fields: {
    backgroundImage: { type: "text" },
    backgroundColor: {
      type: "select",
      options: [
        { label: "深蓝色", value: "blue" },
        { label: "紫色", value: "purple" },
        { label: "绿色", value: "green" },
        { label: "红色", value: "red" },
        { label: "橙色", value: "orange" },
        { label: "粉色", value: "pink" },
        { label: "青色", value: "cyan" },
        { label: "灰色", value: "gray" },
        { label: "黑色", value: "black" },
      ],
    },
    height: {
      type: "select",
      options: [
        { label: "小 (300px)", value: 300 },
        { label: "中 (400px)", value: 400 },
        { label: "大 (500px)", value: 500 },
        { label: "超大 (600px)", value: 600 },
      ],
    },
    title: { type: "text" },
    subtitle: { type: "textarea" },
    buttonText: { type: "text" },
    buttonLink: { type: "text" },
    textAlign: {
      type: "select",
      options: [
        { label: "左对齐", value: "left" },
        { label: "居中", value: "center" },
        { label: "右对齐", value: "right" },
      ],
    },
    overlay: {
      type: "radio",
      options: [
        { label: "开启", value: true },
        { label: "关闭", value: false },
      ],
    },
    overlayOpacity: {
      type: "select",
      options: [
        { label: "20%", value: 20 },
        { label: "30%", value: 30 },
        { label: "40%", value: 40 },
        { label: "50%", value: 50 },
        { label: "60%", value: 60 },
      ],
    },
    padding: {
      type: "select",
      options: [
        { label: "小", value: "sm" },
        { label: "中", value: "md" },
        { label: "大", value: "lg" },
        { label: "超大", value: "xl" },
      ],
    },
    margin: {
      type: "select",
      options: [
        { label: "无", value: "none" },
        { label: "小", value: "sm" },
        { label: "中", value: "md" },
        { label: "大", value: "lg" },
      ],
    },
  },
  defaultProps: {
    backgroundImage: "https://via.placeholder.com/1200x600/1e40af/ffffff?text=Hero+Background",
    backgroundColor: "blue",
    height: 500,
    title: "欢迎来到我们的网站",
    subtitle: "这里是副标题，可以描述您的产品或服务的核心价值",
    buttonText: "立即开始",
    buttonLink: "#",
    textAlign: "center",
    overlay: true,
    overlayOpacity: 40,
    padding: "lg",
    margin: "md",
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
    overlay,
    overlayOpacity,
    padding,
    margin
  }) => {
    // Hero 容器类名
    const heroClasses = "relative flex items-center justify-center bg-cover bg-center bg-no-repeat";

    // 文本对齐类名
    const textAlignClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    };

    // 内边距类名映射
    const paddingClasses = {
      sm: "px-4",
      md: "px-6",
      lg: "px-8",
      xl: "px-12",
    };

    // 外边距类名映射
    const marginClasses = {
      none: "",
      sm: "my-2",
      md: "my-4",
      lg: "my-8",
    };

    const paddingClass = paddingClasses[padding as keyof typeof paddingClasses] || "px-8";
    const marginClass = marginClasses[margin as keyof typeof marginClasses] || "my-4";
    const contentClasses = `relative z-10 text-white max-w-3xl ${paddingClass} ${textAlignClasses[textAlign || "center"]}`;

    // 高度类名映射
    const heightClasses = {
      300: "h-72",
      400: "h-96",
      500: "h-[500px]",
      600: "h-[600px]",
    };

    // 背景色类名映射
    const bgColorClasses = {
      blue: "bg-blue-800",
      purple: "bg-purple-800",
      green: "bg-green-800",
      red: "bg-red-800",
      orange: "bg-orange-800",
      pink: "bg-pink-800",
      cyan: "bg-cyan-800",
      gray: "bg-gray-800",
      black: "bg-black",
    };

    // 遮罩透明度类名映射
    const overlayOpacityClasses = {
      20: "bg-opacity-20",
      30: "bg-opacity-30",
      40: "bg-opacity-40",
      50: "bg-opacity-50",
      60: "bg-opacity-60",
    };

    const heightClass = heightClasses[height as keyof typeof heightClasses] || "h-96";
    const bgColorClass = bgColorClasses[backgroundColor as keyof typeof bgColorClasses] || "bg-blue-800";
    const overlayOpacityClass = overlayOpacityClasses[overlayOpacity as keyof typeof overlayOpacityClasses] || "bg-opacity-40";
    const overlayClass = overlay ? `bg-black ${overlayOpacityClass}` : "";

    // 始终应用背景色，背景图片会覆盖在上面
    const finalHeroClasses = `${heroClasses} ${heightClass} ${bgColorClass} ${marginClass}`;

    return (
      <div
        className={finalHeroClasses}
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      >
        <div className={contentClasses}>
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