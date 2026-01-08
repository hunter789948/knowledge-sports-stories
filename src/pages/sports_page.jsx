export default function Sports() {
  return (
    <div className="pt-28 px-6 pb-32 text-white">
      {/* ↑ added pb-32 */}

      <h1 className="text-3xl font-bold mb-12 text-center">
        Explore Sports
      </h1>

      <div className="flex justify-center gap-10 flex-wrap">
        {/* Cricket Card */}
        <a
          href="/sports/cricket"
          className="group w-full max-w-[340px] h-[420px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition"
        >
          <div className="h-52 overflow-hidden">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/3/2023/02/Best-cricket-players-2024-283d079.jpg?resize=1366,885"
              alt="Cricket"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
          </div>

          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-400 mb-2">
              🏏 Cricket
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Latest cricket news, legendary matches, iconic players, and
              historic moments from around the world.
            </p>
          </div>
        </a>

        {/* Football Card */}
        <a
          href="/sports/football"
          className="group w-full max-w-[340px] h-[420px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition"
        >
          <div className="h-52 overflow-hidden">
            <img
              src="https://pbs.twimg.com/profile_images/1940344470290989057/1OUP8RgK_400x400.jpg"
              alt="Football"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
          </div>

          <div className="p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-2">
              ⚽ Football
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Football news, transfers, unforgettable goals, legendary
              matches, and moments that defined the sport.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
