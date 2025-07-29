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
  autoplayDelay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
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
    autoplayDelay: { type: "number" },
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
  },
  render: ({ images, autoplay, autoplayDelay, showNavigation, showPagination }) => {
    const modules = [];
    if (showNavigation) modules.push(Navigation);
    if (showPagination) modules.push(Pagination);
    if (autoplay) modules.push(Autoplay);

    // 使用 key 强制重新渲染 Swiper 当配置改变时
    const swiperKey = `${autoplay}-${autoplayDelay}-${showNavigation}-${showPagination}`;

    return (
      <div style={{ margin: "16px 0" }}>
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
          style={{
            overflow: "hidden",
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div style={{ position: "relative" }}>
                {image.link ? (
                  <a href={image.link} style={{ display: "block" }}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </a>
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                      display: "block",
                    }}
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