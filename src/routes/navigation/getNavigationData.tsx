import { Email, LinkedIn, SportsEsports } from "@mui/icons-material";
import { Page } from "../../types/pages";
import { ActiveIcon } from "../../types/active-icon";

const getNavigationData = () => {
  const pages: Page[] = [
    { id: 1, title: "home", link: "/dylan-andrew-21/" },
    { id: 2, title: "about", link: "/dylan-andrew-21/about" },
    { id: 3, title: "experiences", link: "/dylan-andrew-21/experiences" },
    // { id: 4, title: "projects", link: "/dylan-andrew-21/projects" },
    { id: 4, title: "passions", link: "/dylan-andrew-21/passions" },
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
      link: "https://dylanandrew.itch.io/",
    },
  ];

  return {
    pages,
    activeIcons,
  };
};

export default getNavigationData;
