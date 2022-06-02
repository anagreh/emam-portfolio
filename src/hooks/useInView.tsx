import React, { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(
  opt?: IntersectionObserverInit,
) {
  const ref = useRef<T>(null!);
  const [isInView, setIsItInView] = useState(true);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const callBack: IntersectionObserverCallback = (entry) => {
    setIsItInView(entry[0].isIntersecting);
    setEntry(entry[0]);
  };
  const observer = new IntersectionObserver(callBack, opt);

  useEffect(() => {
    observer.observe(ref.current);
  });

  return { ref, isInView, entry };
}
