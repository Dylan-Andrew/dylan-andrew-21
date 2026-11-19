import { useTranslation } from "react-i18next";
import NorthEastRounded from "@mui/icons-material/NorthEastRounded";

import { WorkItem } from "../../data/work";

const ExternalLink = ({ item }: { item: WorkItem }) => {
  const { t } = useTranslation();
  if (!item.link) return null;
  return (
    <a className="arrow-link" href={item.link.href} target="_blank" rel="noopener noreferrer">
      {t(item.link.labelKey)}
      <NorthEastRounded fontSize="small" aria-hidden="true" />
      <span className="sr-only"> {t("opensInNewTab")}</span>
    </a>
  );
};

export default ExternalLink;
