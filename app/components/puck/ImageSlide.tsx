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
  autoplayDelay?: 1000 | 2000 | 3000 | 4000 | 5000 | 10000;
  height?: "h-48" | "h-72" | "h-96" | "h-[500px]" | "h-[600px]";
  borderRadius?: "rounded-none" | "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-xl";
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
    height: {
      type: "select",
      options: [
        { label: "小", value: "h-48" },
        { label: "中小", value: "h-72" },
        { label: "中", value: "h-96" },
        { label: "大", value: "h-[500px]" },
        { label: "超大", value: "h-[600px]" },
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
      ],
    },
  },
  defaultProps: {
    images: [
      {
        id: "1",
        src: "",
        alt: "Please upload image.",
        link: "",
      },
    ],
    autoplayDelay: 3000,
    height: "h-96",
    borderRadius: "rounded-md",
  },
  render: ({ images, autoplayDelay, height, borderRadius }) => {
    // 默认启用所有功能
    const modules = [Navigation, Pagination, Autoplay];

    const swiperKey = `${autoplayDelay}-${height}-${borderRadius}`;
    const swiperClassName = `overflow-hidden ${borderRadius}`.trim();

    return (
      <div className="my-4">
        <Swiper
          key={swiperKey}
          modules={modules}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: autoplayDelay || 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className={swiperClassName}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative">
                {image.link ? (
                  <a href={image.link} className="block">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full ${height} object-cover block`}
                    />
                  </a>
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full ${height} object-cover block`}
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