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
  Header,
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
  type HeaderProps,
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
  Header: HeaderProps;
};

// Puck 配置 - 按照主流编辑器的组件分类排序
export const config: Config<Props> = {
  components: {
    // 布局组件
    HeroSection,
    Container,
    Columns,
    Header,

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
  categories: {
    typography: {
      components: ['TextBlock', 'HeadingBlock']
    },
    container: {
      components: [
        'Header',
      ]
    }
  }
};

export default config;