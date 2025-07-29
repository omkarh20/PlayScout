import axios from "axios";
import 'dotenv/config';

const GNEWS_API_URL = "https://gnews.io/api/v4/search";
const G_API_KEY = process.env.G_API_KEY

export const getSportsNews = async (req, res) => {
  try {
    const response = await axios.get(GNEWS_API_URL, {
      params: {
        q: "sports AND (cricket OR football OR stadium)",
        country: "in",
        token: G_API_KEY,
        lang: "en"
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
