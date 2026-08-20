import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Button.css";

const Button = ({ 
  text = "Download CV", 
  href = "#", 
  target = "_blank", 
  rel = "noopener noreferrer",
  download = false,
  ...props 
}) => {
  const buttonRef = useRef(null);
  const flairRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const getXY = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();

      const x = gsap.utils.clamp(
        0,
        100,
        gsap.utils.mapRange(0, width, 0, 100, e.clientX - left)
      );

      const y = gsap.utils.clamp(
        0,
        100,
        gsap.utils.mapRange(0, height, 0, 100, e.clientY - top)
      );

      return { x, y };
    };

    const handleMouseEnter = (e) => {
      const { x, y } = getXY(e);

      xSet(x);
      ySet(y);

      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (e) => {
      const { x, y } = getXY(e);

      gsap.killTweensOf(flair);

      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e) => {
      const { x, y } = getXY(e);

      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mousemove", handleMouseMove);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <a
      href={href}
      target={href !== "#" && href.startsWith("http") ? target : undefined}
      rel={href !== "#" && href.startsWith("http") ? rel : undefined}
      download={download ? (typeof download === "string" ? download : true) : undefined}
      ref={buttonRef}
      className="button button--stroke"
      style={{
        fontFamily: "GeneralSans-Medium",
        fontSize: "1rem",
        fontWeight: "400",
      }}
      data-block="button"
      {...props}
    >
      <span className="button__flair" ref={flairRef}></span>
      <span className="button__label">{text}</span>
    </a>
  );
};

export default Button;