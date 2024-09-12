import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";

const navbarItems: { id: string; title: string; link: string }[] = [
  {
    id: "1",
    title: "Home",
    link: "/",
  },
  {
    id: "2",
    title: "Gallery",
    link: "/gallery",
  },
  {
    id: "3",
    title: "Events",
    link: "/events",
  },
  {
    id: "4",
    title: "About me",
    link: "/about",
  },
  {
    id: "5",
    title: "team",
    link: "/team",
  },
  {
    id: "6",
    title: "contact",
    link: "/contact",
  },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="sticky top-0 z-20 w-full bg-white">
      <nav className="px-4 md:px-[120px] lg:ml-0 lg:mr-0">
        <div className="flex py-[10px] justify-between items-center w-full">
          <Link to={"/"}>
            <Logo />
          </Link>

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
                  <div className="list-none text-base block bg-white px-5 py-5 md:hidden text-[#4F3549]">
                    <ul className="flex gap-5 flex-col mr-5">
                      {navbarItems.map((item) => (
                        <li key={item.id} className="capitalize">
                          <Link to={item.link}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="list-none text-base font-normal hidden md:block text-[#4F3549]">
              <ul className="flex gap-10">
                {navbarItems.map((item) => (
                  <li key={item.id} className="capitalize">
                    <Link to={item.link}>{item.title}</Link>
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
