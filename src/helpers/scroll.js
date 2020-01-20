import { useEffect, useState } from "react";

export const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

const throttle = (callback, sleepTime) => {
  let time = Date.now();

  return (...args) => {
    if (time + sleepTime - Date.now() < 0) {
      callback(...args);
      time = Date.now();
    }
  };
};

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  const updateScrollPosition = throttle(() => {
    setScrollPosition(window.scrollY);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, [updateScrollPosition]);

  return scrollPosition;
};
