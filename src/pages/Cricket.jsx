import { useEffect, useState } from "react";

export default function Cricket() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

  useEffect(() => {
    const fetchCricketNews = async () => {
      try {
        const res = await fetch(
          `https://gnews.io/api/v4/search?q=cricket&lang=en&max=10&apikey=${API_KEY}`
        );

        const data = await res.json();

        if (!data.articles) {
          throw new Error("No articles found");
        }

        setArticles(data.articles);
      } catch (err) {
        setError("Failed to load cricket news");
      } finally {
        setLoading(false);
      }
    };

    fetchCricketNews();
  }, [API_KEY]);

  return (
    <div className="pt-28 max-w-6xl mx-auto px-6 text-white pb-32">
      <h1 className="text-3xl font-bold mb-8">Cricket News</h1>

      {loading && <p className="text-gray-400">Loading cricket news...</p>}
      {error && <p className="text-red-400">{error}</p>}

      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg mb-4 h-44 w-full object-cover"
              />
            )}

            <h2 className="text-lg font-semibold text-green-400">
              {item.title}
            </h2>

            <p className="text-sm text-gray-300 mt-2">
              {item.description}
            </p>

            <p className="text-xs text-gray-500 mt-3">
              {new Date(item.publishedAt).toDateString()}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
