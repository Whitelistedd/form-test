import React, { useEffect, useRef } from "react";

export const useOutsideClick = (ref: any, callback: () => any) => {
  const eventRef = useRef<MouseEvent | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref || !ref.current || !(ref.current instanceof HTMLElement)) return;

      if (ref.current.contains(event.target as Node)) return;
      eventRef.current = event;
      callback();
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      eventRef.current = null;
    };
  }, [callback, ref]);

  const event = eventRef.current;
  return event ? event.type : null;
};
