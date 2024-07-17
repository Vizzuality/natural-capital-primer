import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery: string, defaultValue: boolean) => {
  const [match, setMatch] = useState(defaultValue);

  useEffect(() => {
    const handleResize = () => {
      setMatch(window.matchMedia(mediaQuery).matches);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [mediaQuery, setMatch]);

  return match;
};

export default useMediaQuery;
