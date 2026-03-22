import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        const audio = new Audio('/mixkit-modern-technology-select-3124.wav');
        audio.play().catch(err => console.error("Audio playback failed:", err));
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            document.querySelectorAll(".nav-link").forEach((link) => {
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" } // Adjust margins for proper triggering
    );

    // Give components time to mount and get their IDs, then observe them
    setTimeout(() => {
      document.querySelectorAll("div[id]").forEach((section) => {
        observer.observe(section);
      });
    }, 1000);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
           <img src="/images/dp2.png" alt="Argha" className="profile-logo" />
        </a>
        <a
          href="mailto:arghakarmakar.tech@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          arghakarmakar.tech@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about" className="nav-link">ABOUT</a>
          </li>
          <li>
            <a data-href="#whatido" href="#whatido" className="nav-link">WHAT I DO</a>
          </li>
          <li>
            <a data-href="#experience" href="#experience" className="nav-link">EXPERIENCE</a>
          </li>
          <li>
            <a data-href="#work" href="#work" className="nav-link">WORK</a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" className="nav-link">CONTACT</a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
