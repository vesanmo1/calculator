import { useEffect } from "react";

export function MyNewComponent({ showText }) {
  useEffect(() => {
    const time = new Date().getTime();
    const handleScroll = function () {
      console.log("estoy scrolleando " + time);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [showText]);

  return <p>Josemi la mejor fallera mayor {showText.toString()}</p>;
}
