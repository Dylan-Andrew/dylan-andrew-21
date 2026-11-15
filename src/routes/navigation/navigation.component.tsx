import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SiteHeader from "../../components/site-header/site-header.component";
import SiteFooter, { SignOff } from "../../components/site-footer/site-footer.component";

const Layout = ({ showSignOff = true }: { showSignOff?: boolean }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main" onClick={(e) => {
        e.preventDefault();
        document.getElementById("main")?.focus();
      }}>
        {t("skipToContent")}
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1} style={{ outline: "none" }}>
        <Suspense fallback={<div style={{ minHeight: "70vh" }} />}>
          <Outlet />
        </Suspense>
      </main>
      {showSignOff && <SignOff />}
      <SiteFooter />
    </>
  );
};

export default Layout;
