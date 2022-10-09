declare module "vue" {
  interface GlobalComponents {
    AvueCrud: typeof import("@smallwei/avue")["AvueCrud"];
    AvueForm: typeof import("@smallwei/avue")["AvueForm"];
    AvueTree: typeof import("@smallwei/avue")["AvueTree"];
  }
  interface ComponentCustomProperties {
    $Clipboard: (text: string) => Promise<void>;
    $ImagePreview: (list: { url?: string; thumbUrl?: string }[], index?: number) => void;
    $Print: (selector: string | HTMLElement) => void;
    $Export: {
      excel: (arg: { title: string; columns: { label: string; prop: string }[]; data: any[] }) => void;
      xlsx: (raw: File) => Promise<{ results: any[] }>;
    };
  }
}

export {};
