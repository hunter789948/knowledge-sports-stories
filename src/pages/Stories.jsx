import { Link } from "react-router-dom";
import stories  from "../data/stories";

export default function Stories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 px-6 py-32">
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">

        {stories.map((story) => (
          <Link
            key={story.id}
            to={`/story/${story.id}`}
  className="group bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-2xl p-6 backdrop-blur
             hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 animate-fadeIn"
>
   {/* IMAGE */}
  <img
    src={story.image}
    alt={story.title}
    className="w-full h-50 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500"
  />
            <p className="text-sm text-blue-400 mb-2">
              {story.category}
            </p>

            <h2
  className="text-2xl font-bold mb-3 font-['Playfair_Display']
             bg-gradient-to-r from-blue-400 to-cyan-300
             bg-clip-text text-transparent
             group-hover:from-blue-300 group-hover:to-cyan-200
             transition-all duration-300"
>
  {story.title}
</h2>


            <p className="text-gray-400 text-sm leading-relaxed">
              {story.excerpt}
            </p>
          </Link>
        ))}

      </div>
    </div>
  );
}
