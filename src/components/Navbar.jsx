import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSports, setOpenSports] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400"
      : "text-gray-300 hover:text-white transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-[30px] md:text-[34px] font-extrabold tracking-tight text-white font-['Playfair_Display']"
          onClick={() => {
            setOpenMenu(false);
            setOpenSports(false);
          }}
        >
          Knowledge<span className="text-blue-400">.</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-[18px] font-medium font-['Inter'] tracking-wide">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/stories" className={linkClass}>Stories</NavLink>

          {/* Desktop Sports */}
          <div className="relative">
            <button
              onClick={() => setOpenSports(!openSports)}
              className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition"
            >
              Sports <ChevronDown size={16} />
            </button>

            {openSports && (
              <div className="absolute top-11 right-1/2 translate-x-1/2 w-40 text-center bg-[#0b1220] border border-blue-500/30 rounded-xl shadow-[0_0_25px_rgba(59,130,246,0.25)] backdrop-blur-xl z-50 animate-slideDown">
                <NavLink
                  to="/sports/cricket"
                  className="block px-5 py-3 text-gray-200 hover:text-white hover:bg-blue-500/20"
                  onClick={() => setOpenSports(false)}
                >
                  Cricket
                </NavLink>
                <div className="h-px bg-white/10 mx-3" />
                <NavLink
                  to="/sports/football"
                  className="block px-5 py-3 text-gray-200 hover:text-white hover:bg-blue-500/20"
                  onClick={() => setOpenSports(false)}
                >
                  Football
                </NavLink>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => {
            setOpenMenu(!openMenu);
            setOpenSports(false);
          }}
        >
          {openMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 animate-slideDown">
          <div className="flex flex-col items-center gap-6 py-8 text-lg">

            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setOpenMenu(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/stories"
              className={linkClass}
              onClick={() => setOpenMenu(false)}
            >
              Stories
            </NavLink>

            {/* Mobile Sports */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setOpenSports(!openSports)}
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400"
              >
                Sports <ChevronDown size={16} />
              </button>

              {openSports && (
                <div className="mt-4 space-y-3 text-center">
                  <NavLink
                    to="/sports/cricket"
                    className="block text-gray-200 hover:text-white"
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenSports(false);
                    }}
                  >
                    Cricket
                  </NavLink>

                  <NavLink
                    to="/sports/football"
                    className="block text-gray-200 hover:text-white"
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenSports(false);
                    }}
                  >
                    Football
                  </NavLink>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
