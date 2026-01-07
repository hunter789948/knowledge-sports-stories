import { useParams, Link } from "react-router-dom";
import stories from "../data/stories";

export default function Story() {
  const { id } = useParams();
  const story = stories.find((s) => s.id === id);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Story not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 px-6 pt-28">
      <article className="max-w-3xl mx-auto animate-slideUp px-6 pb-32">

        {/* Back Button */}
        <Link
          to="/stories"
          className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 mb-8 transition-all group"
        >
          <span className="text-lg transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Back to stories
        </Link>

        {/* Category */}
        <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">
          {story.category}
        </p>

        {/* Title */}
        <h1 className="text-4xl font-bold font-['Playfair_Display'] text-blue-300 mb-6">
          {story.title}
        </h1>

        {/* Divider */}
        <div className="h-[1px] w-24 bg-blue-500/40 mb-10"></div>

        {/* Content */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          {story.content.map((para, index) => (
            <p
              key={index}
              className="animate-fade"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {para}
            </p>
          ))}
        </div>

      </article>
    </section>
  );
}
