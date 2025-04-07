import { IconButton, Tooltip } from "@mui/material";
import type { ActiveIcon } from "../../types/active-icon";

const ActiveIcon = ({ activeIcon }: { activeIcon: ActiveIcon }) => {
  const { title, icon, link } = activeIcon;

  const handleClick = () => {
    if (link) {
      if (link.startsWith("mailto:")) {
        window.location.href = link;
      } else {
        window.open(link, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <Tooltip title={title}>
      <IconButton onClick={handleClick}>{icon}</IconButton>
    </Tooltip>
  );
};
export default ActiveIcon;
