import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import axios from "axios";
import "../../assets/styles/styles.css"

const SingleNews = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3007/api/v1/news/${id}`)
      .then((res) => {
        setArticle(res.data.news);
        console.log(res.data.news)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id]);

  if (!article) return <div className="d-flex justify-content-center mt-5">
<div class="spinner-grow text-success" role="status">
   
</div>
</div>;

  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-md-12 my-3">
          <div className="card">
          <img src={article.image ? `http://localhost:3007/${article.image}` : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"} className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
