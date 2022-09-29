declare module "@smallwei/avue" {
  export interface DicItem extends Record<string, any> {
    label?: string;
    value?: any;
    display?: boolean;
    disabled?: boolean;
  }

  export interface DicProps {
    label?: string;
    value?: string;
    children?: string;
    res?: string;
  }
}
