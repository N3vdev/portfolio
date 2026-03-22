import { useState, useEffect } from "react";

export function useTypewriter(words, speed = 70, pause = 2400) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = words[wi];
    let t;
    if (!del) {
      if (ci < cur.length) t = setTimeout(() => setCi(c => c + 1), speed);
      else t = setTimeout(() => setDel(true), pause);
    } else {
      if (ci > 0) t = setTimeout(() => setCi(c => c - 1), speed / 2.5);
      else { setDel(false); setWi(w => (w + 1) % words.length); }
    }
    setDisplay(cur.slice(0, ci));
    return () => clearTimeout(t);
  }, [ci, del, wi, words, speed, pause]);

  return display;
}

export function useInView(ref, threshold = 0.1) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return v;
}