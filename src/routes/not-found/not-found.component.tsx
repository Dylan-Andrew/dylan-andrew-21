import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <section className="wrap lost" aria-labelledby="lost-title">
      <h1 className="display" id="lost-title" style={{ maxWidth: "14ch" }}>
        {t("notFoundTitle")}
      </h1>
      <p className="lede">{t("notFoundText")}</p>
      <p style={{ margin: 0 }}>
        <Link className="btn btn--solid" to="/">
          {t("notFoundHome")}
        </Link>
      </p>
    </section>
  );
};

export default NotFound;
