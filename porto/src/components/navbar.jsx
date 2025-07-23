"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "project", label: "Project" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef([]);
  const navLinksContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Find the DOM node for the active nav item
    const idx = navItems.findIndex((item) => item.id === activeSection);
    if (navRefs.current[idx] && navLinksContainerRef.current) {
      const node = navRefs.current[idx];
      const containerRect = navLinksContainerRef.current.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      setHighlightStyle({
        left: nodeRect.left - containerRect.left,
        width: nodeRect.width,
      });
    }
  }, [activeSection]);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50">

      <div className="nav-wrapper bg-green-100/80 w-fit mx-auto backdrop-blur-md rounded-[12px] flex items-center px-4 py-2 border border-green-200 shadow-sm relative drop-shadow-2xl">
        {/* Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-200 mr-2">
          <Image src="/icon.webp" width={28} height={28} alt="icon" />
        </div>
        {/* Separator */}
        <div className="w-[2px] h-8 bg-green-300 mx-2" />
        {/* Navigation Links */}
        <div className="relative flex items-center gap-2" ref={navLinksContainerRef}>
          {/* Highlight (background only, no text) */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-8 bg-green-200 rounded-md transition-all duration-300 z-0 shadow cursor-target"
            style={{
              left: highlightStyle.left,
              width: highlightStyle.width,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          />
          {navItems.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              ref={el => navRefs.current[idx] = el}
              className={
                `relative z-10 px-4 py-2 font-medium transition-colors duration-200 cursor-target` +
                (activeSection === item.id ? "text-green-900 font-bold" : "text-green-700 hover:text-green-900 cursor-target")
              }
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* Separator */}
        <div className="w-[2px] h-8 bg-green-300 mx-2" />
        {/* CV Button */}
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 px-4 py-2 rounded-md bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition-colors duration-200 cursor-target"
        >
          CV
        </a>
      </div>
    </nav>
  );
}
  