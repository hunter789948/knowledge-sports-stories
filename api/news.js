export default async function handler(req, res) {
  const { q = "sports" } = req.query;

  const url = `https://newsapi.org/v2/everything?q=${q}&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
