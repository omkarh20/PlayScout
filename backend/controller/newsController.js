import axios from "axios";

const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = "9772248fe8a34373b14a206d9bc4d6e5";

const GNEWS_API_URL = "https://gnews.io/api/v4/search";
const G_API_KEY = "c5f10b92ed9556eb75fdd12ee5bafda8";

export const getSportsNews = async (req, res) => {
  try {
    const response = await axios.get(GNEWS_API_URL, {
      params: {
        q: "sports AND (cricket OR football OR stadium)",
        country: "in",
        token: G_API_KEY,
      },
    });

    const articles = response.data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      image: article.image,
      url: article.url,
    }));

    res.json({ success: true, articles });
  } catch (error) {
    console.error("Error fetching sports news:", error);
    res.status(500).json({ success: false, message: "Failed to fetch news" });
  }
};
