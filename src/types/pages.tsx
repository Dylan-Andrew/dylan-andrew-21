export type Page = {
  id: string;
  title: string;
  link: string;
};

export const pages: Page[] = [
  { id: "home", title: "home", link: "/" },
  { id: "work", title: "work", link: "/projects" },
  { id: "experiences", title: "experiences", link: "/experiences" },
  { id: "about", title: "about", link: "/about" },
  { id: "passions", title: "passions", link: "/passions" },
];
