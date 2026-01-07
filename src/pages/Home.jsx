import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white px-10 py-24 flex items-center">
      
      <div className="max-w-4xl animate-slide">
       <h1 className="text-6xl font-extrabold leading-tight mb-6 font-['Playfair_Display']">
  Knowledge & <span className="text-blue-400">Stories</span>
</h1>


        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
          A place for memorable sports moments, powerful stories,
          and insights that shaped history.
        </p>

        <div className="mt-10 flex gap-6">
          <a
            href="/sports"
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition-all duration-300 font-medium"
          >
            Explore Sports
          </a>

          <a
            href="/stories"
            className="px-6 py-3 rounded-xl border border-white/20 hover:border-white transition-all duration-300 font-medium"
          >
            Read Stories
          </a>
        </div>
      </div>

    </div>
  );
}
