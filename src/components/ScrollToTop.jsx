// src/components/ScrollToTop.jsx
// Scrolls to the top of the page on every route change.
// Must be rendered inside <BrowserRouter> in App.jsx.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}
