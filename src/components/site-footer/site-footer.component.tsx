import { useTranslation } from "react-i18next";
import { contact } from "../../data/work";

export const SignOff = () => {
  const { t } = useTranslation();
  return (
    <section className="signoff" aria-labelledby="signoff-title">
      <div className="wrap">
        <h2 className="h2" id="signoff-title">
          {t("signoffTitle")}
        </h2>
        <p>{t("signoffText")}</p>
        <div className="signoff__actions">
          <a className="btn btn--red" href={contact.email}>
            {t("signoffEmail")}
          </a>
          <a className="btn btn--line" href={contact.linkedIn} target="_blank" rel="noopener noreferrer">
            {t("signoffLinkedIn")}
            <span className="sr-only"> {t("opensInNewTab")}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const SiteFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__row">
        <ul>
          <li>
            <a href={contact.email}>Email</a>
          </li>
          <li>
            <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn<span className="sr-only"> {t("opensInNewTab")}</span>
            </a>
          </li>
          <li>
            <a href={contact.itch} target="_blank" rel="noopener noreferrer">
              itch.io<span className="sr-only"> {t("opensInNewTab")}</span>
            </a>
          </li>
        </ul>
        <p>{t("copyright", { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
