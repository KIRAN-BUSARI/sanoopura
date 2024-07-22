import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200 sm:px-[120px] px-[20px]">
      <nav className="pt-5 pb-5">
        <div className="flex flex-wrap justify-between items-center">
          <div className="h-[40px] w-[183px] flex justify-center items-center">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="list-none text-lg hidden sm:block">
            <ul className="flex gap-6">
              <li>
                <a className="hover:text-secondary" href="#">
                  Aboute Me
                </a>
              </li>
              <li>
                <a className="hover:text-secondary" href="#">
                  Sanoopura
                </a>
              </li>
              <li>
                <a className="hover:text-secondary" href="#">
                  Gallery
                </a>
              </li>
              <li>
                <a className="hover:text-secondary" href="#">
                  Events
                </a>
              </li>
              <li>
                <a className="hover:text-secondary" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:hidden block">. . .</div>
        </div>
      </nav>
    </header>
  );
}
