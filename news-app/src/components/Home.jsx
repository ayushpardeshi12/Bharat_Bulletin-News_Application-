import { useState, useEffect } from "react";
import Nav from "./Nav";
import { fetchNewsArticles } from "../api/news_Api";
import Loading from "./Loading";

function Home() {
  //   const count = 20;
  const firstSearchTerm = "Global";
  const [searchTerm, setSearchTerm] = useState("");
  const [newsData, setNewsData] = useState({ articles: [] });
  //   const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState("");

  const fetchDefaultNewsArticles = async () => {
    try {
      setLoading(true);
      fetchNewsArticles(firstSearchTerm).then((data) => {
        setNewsData(data);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDefaultNewsArticles();
  }, []);

  useEffect(() => {
    try {
      setLoading(true);
      fetchNewsArticles(searchTerm).then((data) => {
        setNewsData(data);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  return (
    <>
      <Nav onSearch={setSearchTerm} />
      <div className="heading text-center">
        <h1 className="my-2 fs-1">Bharat Bulletin</h1>
        <p className="mb-2 fs-3">
          Your Daily Dose of Bharat: Stay Informed, Stay Empowered
        </p>
      </div>
      {loading && <Loading />}
      <div className="container1">
        {newsData.articles.map((article) => (
          <div className="card" style={{ width: "18rem" }} key={article.url}>
            <img src={article.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body article">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <a href={article.url} className="btn btn-primary">
                Read More...
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
