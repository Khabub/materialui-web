import { useCallback, useEffect, useState } from "react";

export const useMobileMenu = () => {
  const [menu, setMenu] = useState<boolean | string>("noshow");

  const windowResizeHandler = useCallback(() => {
    window.innerWidth >= 1200 ? setMenu(false) : setMenu(true);
  }, []);

  useEffect(() => {
    if (menu === "noshow") {
      window.innerWidth >= 1200 ? setMenu(false) : setMenu(true);
    }

    window.addEventListener("resize", windowResizeHandler);

    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, [windowResizeHandler, menu]);

  return {
    menu,
  };
};
