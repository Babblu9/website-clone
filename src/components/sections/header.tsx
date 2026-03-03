"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "HOME", href: "/" },
    {
      title: "ABOUT US",
      href: "/about-us",
      submenu: [
        { title: "What we do", href: "/about-us" },
        { title: "Affiliations and Memberships", href: "/affiliations-and-memberships" },
        { title: "Director’s Desk", href: "/director-message" },
        { title: "Students Reviews", href: "/student-review" },
      ],
    },
    { title: "ADMISSIONS", href: "/admissions" },
    {
      title: "COURSES",
      href: "#",
      submenu: [
        { title: "Fashion Design", href: "/bsc-in-fashion-design" },
        { title: "Interior Design", href: "/bsc-in-interior-design" },
        { title: "Textile Design", href: "/bsc-in-textile-design" },
        { title: "Luxury Brand Management", href: "/diploma-luxury-brand-management" },
        { title: "Art & Craft", href: "/art-and-craft" },
        { title: "Boutique Management", href: "/boutique-management" },
      ],
    },
    {
      title: "ACADEMICS",
      href: "#",
      submenu: [
        { title: "Online Application", href: "/online-application" },
        { title: "For Parents", href: "/for-parents" },
        { title: "Fee Payment", href: "/fee-payment" },
        { title: "Student Work", href: "/student-work" },
        { title: "Insights @ IIFT", href: "/blogs" },
      ],
    },
    {
      title: "CAMPUS",
      href: "#",
      submenu: [
        { title: "Campus Life", href: "/life-at-iift" },
        { title: "Hostel", href: "/hostel" },
        { title: "Celebrity Visits", href: "/celebrity-visits" },
        { title: "Training and placements", href: "/training-and-placement" },
        { title: "News and Events", href: "/news-and-events" },
        { title: "FAQ", href: "/faq" },
      ],
    },
    { title: "CONTACT US", href: "/contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 bg-[#ED1C24] ${isSticky ? "py-2 shadow-lg" : "py-4"
        }`}
    >
      <div className="container mx-auto px-5 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="relative block">
            <div className="bg-white rounded-full p-1 shadow-md w-[80px] h-[80px] flex items-center justify-center">
              <Image
                src="/logo-iiftd.png"
                alt="IIFT - Indian Institute of Fashion Technology & Design"
                width={70}
                height={70}
                className="object-contain"
                priority
              />
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-x-6">
            {menuItems.map((item, index) => (
              <li key={index} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 font-display text-[14px] font-semibold text-white uppercase tracking-wide py-2 transition-opacity hover:opacity-80"
                >
                  {item.title}
                  {item.submenu && <ChevronDown size={14} className="stroke-[3px]" />}
                </a>

                {item.submenu && (
                  <ul className="absolute left-0 top-full mt-0 w-[240px] bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 py-2 border-t-2 border-[#ED1C24]">
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={sub.href}
                          className="block px-6 py-3 text-[13px] font-medium text-[#111111] hover:text-[#ED1C24] hover:bg-gray-50 uppercase transition-colors"
                        >
                          {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action Button */}
        <div className="hidden lg:block">
          <a
            href="/online-application"
            className="inline-block px-5 py-2 border-2 border-white text-white font-display text-[13px] font-bold uppercase tracking-wider bg-transparent hover:bg-white hover:text-[#ED1C24] transition-all duration-300"
          >
            APPLY NOW
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-[1001]" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[1002] transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-5 flex justify-between items-center bg-[#ED1C24]">
          <div className="bg-white rounded-full p-1 w-[60px] h-[60px] flex items-center justify-center">
            <Image
              src="/logo-iiftd.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="text-white">
            <X size={32} />
          </button>
        </div>
        <div className="py-2 overflow-y-auto h-[calc(100vh-100px)]">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100">
              <a
                href={item.href}
                className="flex items-center justify-between px-6 py-4 text-[14px] font-bold text-[#111111] uppercase tracking-wide hover:bg-gray-50"
              >
                {item.title}
              </a>
              {item.submenu && (
                <div className="bg-gray-50 px-8 py-2">
                  {item.submenu.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href={sub.href}
                      className="block py-3 text-[13px] text-[#54595F] uppercase hover:text-[#ED1C24]"
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-6">
            <a
              href="/online-application"
              className="block text-center py-3 bg-[#ED1C24] text-white font-bold uppercase text-[14px] tracking-wider"
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;