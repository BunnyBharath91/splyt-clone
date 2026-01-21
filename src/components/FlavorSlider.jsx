import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    const textContainerWidth = document.querySelector(".general-title");
    const scrollAmount =
      textContainerWidth.offsetWidth +
      sliderRef.current.scrollWidth -
      window.innerWidth;
    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<",
      );

    const cards = document.querySelectorAll(".flavors > div");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const bounds = card.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        const offsetX = (x / bounds.width - 0.5) * 30; // max 30px left/right
        const offsetY = (y / bounds.height - 0.5) * 30; // max 30px up/down

        const elements = card.querySelector(".elements");
        const drinks = card.querySelector(".drinks");

        if (elements)
          gsap.to(elements, {
            x: offsetX,
            y: offsetY,
            duration: 0.3,
            ease: "power2.out",
          });

        if (drinks)
          gsap.to(drinks, { x: -offsetX, duration: 0.3, ease: "power2.out" });
      });

      card.addEventListener("mouseleave", () => {
        const elements = card.querySelector(".elements");
        const drinks = card.querySelector(".drinks");

        if (elements)
          gsap.to(elements, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
        if (drinks)
          gsap.to(drinks, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
      });
    });
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-90 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              className="absolute bottom-0"
            />

            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="drinks"
            />

            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
