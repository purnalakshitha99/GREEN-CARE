
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Modal from 'react-modal';
import "../../assets/styles/styles.css"
import { useEffect, useState, useRef } from "react";

Modal.setAppElement('#root'); // This line is needed for accessibility reasons

const News = () => {
  const [news, setNews] = useState([]);
  const [updateNewsId, setUpdateNewsId] = useState(null);
  const [updateNewsTitle, setUpdateNewsTitle] = useState("");
  const [updateNewsDescription, setUpdateNewsDescription] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const [updateNewsImage, setUpdateNewsImage] = useState(null);
  const fileInputRef = useRef(null);

  // Function to fetch news from the server
  const fetchNews = () => {
    axios.get("http://localhost:3007/api/v1/news")
      .then((res) => {
        setNews(res.data.news);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchNews();
  }, []);

  const deleteNews = (id) => {
    console.log("Deleting news with id: ", id); // Step 4
  
    axios.delete(`http://localhost:3007/api/v1/news/${id}`)
      .then((res) => {
        console.log("Server response: ", res); // Step 2
  
        // After deleting, fetch the news list again to get the updated list
        fetchNews();
      })
      .catch((err) => {
        console.log("Error deleting news: ", err); // Step 3
      })
  }
  
  const updateNews = (id, title, description, image) => {
    setUpdateNewsId(id);
    setUpdateNewsTitle(title);
    setUpdateNewsDescription(description);
    setUpdateNewsImage(image);
    setModalIsOpen(true);
  }
  const saveUpdate = () => {
    const formData = new FormData();
    formData.append('title', updateNewsTitle);
    formData.append('description', updateNewsDescription);
    if (fileInputRef.current.files[0]) {
      formData.append('image', fileInputRef.current.files[0]);
    }

    axios.put(`http://localhost:3007/api/v1/news/update/${updateNewsId}`, formData)
      .then((res) => {
        fetchNews();
      })
      .catch((err) => {
        console.log(err);
      })

    setModalIsOpen(false);
  }

  const navigateToSingleNews = (id) => {
    navigate(`/singlenews/${id}`);
  }

  return (
    
    <div className="container m-5">
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Update News</h2>
        <input value={updateNewsTitle} onChange={(e) => setUpdateNewsTitle(e.target.value)} placeholder="Title" />
        <input value={updateNewsDescription} onChange={(e) => setUpdateNewsDescription(e.target.value)} placeholder="Description" />
        <button onClick={saveUpdate}>Save</button>
      </Modal>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Update News</h2>
        <input value={updateNewsTitle} onChange={(e) => setUpdateNewsTitle(e.target.value)} placeholder="Title" />
        <input value={updateNewsDescription} onChange={(e) => setUpdateNewsDescription(e.target.value)} placeholder="Description" />
        <input type="file" ref={fileInputRef} />
        <button onClick={saveUpdate}>Save</button>
      </Modal>
      <div className="row">
        {news.length > 0 ? (
          news.map((article) => (
            <div className="col-md-3 my-3" key={article._id}>
              <div className="card">
                <img src={article.image ? `http://localhost:3007/${article.image}` : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a className="card-read-more" onClick={() => navigateToSingleNews(article._id)}>
                    <span className = "card-span">Read More</span>
                  </a>
                  <button onClick={() => deleteNews(article._id)}>Delete</button>
                  <button onClick={() => updateNews(article._id, article.title, article.description)}>Update</button>
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

