import type { Config } from "@measured/puck";
import {
  HeadingBlock,
  TextBlock,
  ImageBlock,
  ImageSlide,
  type HeadingBlockProps,
  type TextBlockProps,
  type ImageBlockProps,
  type ImageSlideProps,
} from "./components/puck";

// 定义组件属性类型
type Props = {
  HeadingBlock: HeadingBlockProps;
  TextBlock: TextBlockProps;
  ImageBlock: ImageBlockProps;
  ImageSlide: ImageSlideProps;
};

// Puck 配置
export const config: Config<Props> = {
  components: {
    HeadingBlock,
    TextBlock,
    ImageBlock,
    ImageSlide,
  },
};

export default config;