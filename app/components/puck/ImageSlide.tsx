import type { ComponentConfig } from "@measured/puck";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// 导入 Swiper 样式
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type ImageSlideProps = {
  images: Array<{
    id: string;
    src: string;
    alt: string;
    link?: string;
  }>;
  autoplay?: boolean;
  autoplayDelay?: 1000 | 2000 | 3000 | 4000 | 5000 | 10000;
  showNavigation?: boolean;
  showPagination?: boolean;
  height?: 200 | 300 | 400 | 500 | 600;
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl";
};

export const ImageSlide: ComponentConfig<ImageSlideProps> = {
  fields: {
    images: {
      type: "array",
      arrayFields: {
        id: { type: "text" },
        src: { type: "text" },
        alt: { type: "text" },
        link: { type: "text" },
      },
    },
    autoplay: {
      type: "radio", options: [
        { label: "开启", value: true },
        { label: "关闭", value: false },
      ]
    },
    autoplayDelay: {
      type: "select",
      options: [
        { label: "1秒", value: 1000 },
        { label: "2秒", value: 2000 },
        { label: "3秒", value: 3000 },
        { label: "4秒", value: 4000 },
        { label: "5秒", value: 5000 },
        { label: "10秒", value: 10000 },
      ],
    },
    showNavigation: {
      type: "radio", options: [
        { label: "显示", value: true },
        { label: "隐藏", value: false },
      ]
    },
    showPagination: {
      type: "radio", options: [
        { label: "显示", value: true },
        { label: "隐藏", value: false },
      ]
    },
    height: {
      type: "select",
      options: [
        { label: "小 (200px)", value: 200 },
        { label: "中小 (300px)", value: 300 },
        { label: "中 (400px)", value: 400 },
        { label: "大 (500px)", value: 500 },
        { label: "超大 (600px)", value: 600 },
      ],
    },
    borderRadius: {
      type: "select",
      options: [
        { label: "无圆角", value: "none" },
        { label: "小圆角", value: "sm" },
        { label: "中圆角", value: "md" },
        { label: "大圆角", value: "lg" },
        { label: "超大圆角", value: "xl" },
      ],
    },
  },
  defaultProps: {
    images: [
      {
        id: "1",
        src: "https://via.placeholder.com/800x400/f8f9fa/6c757d?text=%E7%82%B9%E5%87%BB%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87",
        alt: "请上传图片",
        link: "",
      },
    ],
    autoplay: true,
    autoplayDelay: 3000,
    showNavigation: true,
    showPagination: true,
    height: 400,
    borderRadius: "none",
  },
  render: ({ images, autoplay, autoplayDelay, showNavigation, showPagination, height, borderRadius }) => {
    const modules = [];
    if (showNavigation) modules.push(Navigation);
    if (showPagination) modules.push(Pagination);
    if (autoplay) modules.push(Autoplay);

    // 使用 key 强制重新渲染 Swiper 当配置改变时
    const swiperKey = `${autoplay}-${autoplayDelay}-${showNavigation}-${showPagination}-${height}-${borderRadius}`;

    // 高度类名映射
    const heightClasses = {
      200: "h-48",
      300: "h-72", 
      400: "h-96",
      500: "h-[500px]",
      600: "h-[600px]",
    };

    // 圆角类名映射
    const radiusClasses = {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md", 
      lg: "rounded-lg",
      xl: "rounded-xl",
    };

    const heightClass = heightClasses[height as keyof typeof heightClasses] || "h-96";
    const radiusClass = radiusClasses[borderRadius as keyof typeof radiusClasses] || "";
    const swiperClasses = `overflow-hidden ${radiusClass}`.trim();

    return (
      <div className="my-4">
        <Swiper
          key={swiperKey}
          modules={modules}
          spaceBetween={0}
          slidesPerView={1}
          navigation={showNavigation}
          pagination={showPagination ? { clickable: true } : false}
          autoplay={autoplay ? {
            delay: autoplayDelay || 3000,
            disableOnInteraction: false,
          } : false}
          loop={true}
          className={swiperClasses}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative">
                {image.link ? (
                  <a href={image.link} className="block">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full ${heightClass} object-cover block`}
                    />
                  </a>
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full ${heightClass} object-cover block`}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  },
};