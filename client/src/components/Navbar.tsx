import Logo from "./Logo";
import { useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";

const navbarItems: {
  id: string;
  title: string;
  link: string;
  name?: string;
}[] = [
  {
    id: "1",
    title: "Home",
    link: "/",
  },
  {
    id: "2",
    title: "Gallery",
    link: "#gallery",
    name: "gallery",
  },
  {
    id: "3",
    title: "Events",
    link: "#events",
    name: "events",
  },
  {
    id: "4",
    title: "About me",
    link: "#about",
    name: "about",
  },
  {
    id: "5",
    title: "team",
    link: "#team",
    name: "team",
  },
  {
    id: "6",
    title: "contact",
    link: "#contact",
    name: "contact",
  },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const linkClasses = (link: string) =>
    link === activeLink ? "text-secondary" : "text-primary";

  return (
    <header className="sticky top-0 z-20 w-full bg-white">
      <nav className="px-4 md:px-[120px] lg:ml-0 lg:mr-0">
        <div className="flex py-[10px] justify-between items-center w-full">
          <a href={"/"}>
            <Logo />
          </a>

          <button className="md:hidden relative -mr-2" onClick={handleClick}>
            {isOpen ? (
              <CgClose className="text-2xl" />
            ) : (
              <CgMenuRight className="text-2xl" />
            )}
          </button>

          {isOpen ? (
            <>
              <div className="md:hidden w-full fixed right-0 font-semibold">
                <div className="h-48 mt-5 text-end absolute flex flex-col items-end w-full">
                  <div className="list-none text-base block px-5 bg-white py-5 md:hidden">
                    <ul className="flex gap-5 flex-col mr-5">
                      {navbarItems.map((item) => (
                        <li key={item.id} className="capitalize">
                          <a
                            href={item.link}
                            onClick={() => handleLinkClick(item.name || "")}
                            className={linkClasses(item.name || "")}
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="list-none text-base font-normal hidden md:block">
              <ul className="flex gap-10">
                {navbarItems.map((item) => (
                  <li key={item.id} className="capitalize">
                    <a
                      href={item.link}
                      onClick={() => handleLinkClick(item.name || "")}
                      className={linkClasses(item.name || "")}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
