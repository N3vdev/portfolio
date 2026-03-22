import { useState, useEffect } from "react";
import { globalStyles } from "./styles/global";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Projects from "./components/Projects";
import Contact  from "./components/Contact";

export default function App() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = ["hero", "about", "projects", "contact"];
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { threshold: .38 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <>
      <style>{globalStyles}</style>
      <Navbar   active={active} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}