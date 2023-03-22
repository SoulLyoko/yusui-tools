declare module "vue" {
  interface GlobalComponents {
    AvueCrud: typeof import("@smallwei/avue")["AvueCrud"];
    AvueForm: typeof import("@smallwei/avue")["AvueForm"];
    AvueTree: typeof import("@smallwei/avue")["AvueTree"];
  }
  interface ComponentCustomProperties {
    $Clipboard: (arg: { text: string }) => Promise<void>;
    $ImagePreview: (list: { url?: string; thumbUrl?: string }[], index?: number) => void;
    $Print: (selector: string | HTMLElement) => void;
    $Export: {
      excel: (arg: { title: string; columns: { label: string; prop: string }[]; data: any[] }) => void;
      xlsx: (raw: File) => Promise<{ results: any[] }>;
    };
    $Log: {
      capsule: (title?: string, content?: string, type?: string) => void;
      colorful: (content?: string) => void;
      danger: (content?: string) => void;
      default: (content?: string) => void;
      primary: (content?: string) => void;
      success: (content?: string) => void;
      warning: (content?: string) => void;
    };
  }
}

export {};
