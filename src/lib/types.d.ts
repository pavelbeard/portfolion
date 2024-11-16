export type Tag = {
  name: string;
  class: string;
  icon: ReactNode;
};

export type NamedTag = {
  [x: string]: Tag;
};

export type Project = {
  title: string;
  description: string;
  link?: string;
  github?: string;
  img: string;
  tags: Tag[];
};
