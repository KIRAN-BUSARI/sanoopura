import { Link } from "react-router-dom";
import Logo from "./Logo";

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
  return (
    <header className="sticky top-0 z-20 w-full sm:px-[120px] px-[20px]">
      <nav className="pt-5 pb-5">
        <div className="flex flex-wrap justify-between items-center">
          <div className="h-[40px] w-[183px] flex justify-center items-center">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="list-none text-base hidden sm:block text-[#4F3549]">
            <ul className="flex gap-10">
              {navbarItems.map((item) => (
                <li key={item.id} className="uppercase">
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:hidden block">. . .</div>
        </div>
      </nav>
    </header>
  );
}
