import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br
  from-black
  via-[#050b18]
  to-[#0a1633]
  border-t border-blue-500/20">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-extrabold text-white font-['Playfair_Display']">
                            Knowledge<span className="text-blue-400">.</span>
                        </h2>
                        <p className="mt-3 text-gray-300 text-sm max-w-sm leading-relaxed">
                            Premium sports stories, iconic moments, and legendary journeys —
                            written for true fans of the game.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-10 text-sm">
                        <div className="flex flex-col gap-3">
                            <span className="text-gray-500 uppercase tracking-wide text-xs">
                                Pages
                            </span>
                            <NavLink to="/" className="text-gray-300 hover:text-white">
                                Home
                            </NavLink>
                            <NavLink to="/stories" className="text-gray-300 hover:text-white">
                                Stories
                            </NavLink>
                        </div>

                        <div className="flex flex-col gap-3">
                            <span className="text-gray-500 uppercase tracking-wide text-xs">
                                Sports
                            </span>
                            <NavLink
                                to="/sports/cricket"
                                className="text-gray-300 hover:text-white"
                            >
                                Cricket
                            </NavLink>
                            <NavLink
                                to="/sports/football"
                                className="text-gray-300 hover:text-white"
                            >
                                Football
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-10" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>
                        © {new Date().getFullYear()} Knowledge. All rights reserved.
                    </p>
                    <p>
                        Built with ❤️ for sports storytelling
                    </p>
                </div>
            </div>
        </footer>
    );
}
