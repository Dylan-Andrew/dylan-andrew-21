import { Email, LinkedIn, SportsEsports } from "@mui/icons-material";
import { Page } from "../../types/pages";
import { ActiveIcon } from "../../types/active-icon";

const getNavigationData = () => {
  const pages: Page[] = [
    { id: 1, title: "home", link: "/" },
    { id: 2, title: "about", link: "/about" },
    { id: 3, title: "experiences", link: "/experiences" },
    { id: 4, title: "projects", link: "/projects" },
    { id: 5, title: "passions", link: "/passions" },
    { id: 6, title: "contact", link: "/contact" },
  ];

  const activeIcons: ActiveIcon[] = [
    {
      id: 1,
      title: "Email",
      icon: <Email />,
      link: "mailto:andrew21dylan@gmail.com",
    },
    {
      id: 2,
      title: "LinkedIn",
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/in/dylan-andrew-razafintsalama/",
    },
    {
      id: 3,
      title: "Itch.io",
      icon: <SportsEsports />,
      link: "",
    },
  ];

  return {
    pages,
    activeIcons,
  };
};

export default getNavigationData;
