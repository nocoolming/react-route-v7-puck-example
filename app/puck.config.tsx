import type { Config } from "@measured/puck";
import {
  HeadingBlock,
  TextBlock,
  ImageBlock,
  ImageSlide,
  Container,
  HeroSection,
  Button,
  Spacer,
  Divider,
  Columns,
  type HeadingBlockProps,
  type TextBlockProps,
  type ImageBlockProps,
  type ImageSlideProps,
  type ContainerProps,
  type HeroSectionProps,
  type ButtonProps,
  type SpacerProps,
  type DividerProps,
  type ColumnsProps,
} from "./components/puck";

// 定义组件属性类型
type Props = {
  HeadingBlock: HeadingBlockProps;
  TextBlock: TextBlockProps;
  ImageBlock: ImageBlockProps;
  ImageSlide: ImageSlideProps;
  Container: ContainerProps;
  HeroSection: HeroSectionProps;
  Button: ButtonProps;
  Spacer: SpacerProps;
  Divider: DividerProps;
  Columns: ColumnsProps;
};

// Puck 配置 - 按照主流编辑器的组件分类排序
export const config: Config<Props> = {
  components: {
    // 布局组件
    HeroSection,
    Container,
    Columns,
    
    // 内容组件
    HeadingBlock,
    TextBlock,
    ImageBlock,
    ImageSlide,
    Button,
    
    // 设计组件
    Spacer,
    Divider,
  },
};

export default config;