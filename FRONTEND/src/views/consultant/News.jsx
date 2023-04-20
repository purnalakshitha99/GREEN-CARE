import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3007/api/v1/news");
        console.log(result.data);
        setNews(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {news.length > 0 ? (
          news.map((article) => (
            <div className="col-md-4 my-3" key={article._id}>
              <div className="card">
                <img src={article.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No News to Display!</p>
        )}
      </div>
    </div>
  );
};

export default News;
