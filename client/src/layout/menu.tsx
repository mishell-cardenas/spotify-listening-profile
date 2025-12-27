import { NavLink } from "react-router-dom";
import { IoMusicalNotes } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { PiPlaylist } from "react-icons/pi";
import { MdReplay } from "react-icons/md";
import { BiAlbum } from "react-icons/bi";

import clsx from "clsx";
import logo from "../assets/spotify_green.png";

const navItems = [
  { to: "/profile", label: "Profile", icon: BsFillPersonFill },
  { to: "/artist", label: "Top Artists", icon: IoMusicalNotes },
  { to: "/tracks", label: "Top Tracks", icon: BiAlbum },
  { to: "/recent", label: "Recent", icon: MdReplay },
  { to: "/playlists", label: "Playlists", icon: PiPlaylist },
]

export default function Menu() {
  return (
    <div className="absolute top-0 inset-0 shadow-xl">
      <div className="bg-[#121212] text-white h-screen w-27 flex justify-center items-center">
        {/* Spotify Logo */}
        <img src={logo} alt="spotify_logo" className="absolute top-7 flex justify-center items-center h-13 w-auto cursor-pointer"/>

        {/* Navigation Bar */}
        <nav className="w-full">
          <ul className="flex flex-col">
            {navItems.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  clsx(
                    "flex flex-col gap-1 h-20 justify-center items-center border-l-6 transition-all duration-200",
                    isActive ? "opacity-100 border-[#1ED760] bg-[#212121]" : "opacity-80 border-[#121212] hover:opacity-100 hover:border-[#1ED760] hover:bg-[#212121]"
                  )
                }
              >
                <Icon className="text-3xl" />
                <div className="text-xs">{label}</div>
              </NavLink>
            ))}
          </ul>
        </nav>

      </div>
    </div>
  )
}