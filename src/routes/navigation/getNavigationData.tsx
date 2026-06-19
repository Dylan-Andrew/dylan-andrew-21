import { Page } from "../../types/pages";

const getNavigationData = () => {
  const pages: Page[] = [
    { id: 1, title: "home", link: "" },
    { id: 2, title: "about", link: "about" },
    { id: 3, title: "experiences", link: "experiences" },
    { id: 4, title: "projects", link: "projects" },
    { id: 5, title: "passions", link: "passions" },
  ];

  return { pages };
};

export default getNavigationData;
