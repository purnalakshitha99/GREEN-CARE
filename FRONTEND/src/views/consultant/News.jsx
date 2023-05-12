import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Modal from 'react-modal';
import "../../assets/styles/styles.css"

Modal.setAppElement('#root'); // This line is needed for accessibility reasons

const News = () => {
  const [news, setNews] = useState([]);
  const [updateNewsId, setUpdateNewsId] = useState(null);
  const [updateNewsTitle, setUpdateNewsTitle] = useState("");
  const [updateNewsDescription, setUpdateNewsDescription] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

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
        console.log("Error deleting news: ", err); 
      })
  }
  
  const updateNews = (id, title, description) => {
    setUpdateNewsId(id);
    setUpdateNewsTitle(title);
    setUpdateNewsDescription(description);
    setModalIsOpen(true);
  }

  const saveUpdate = () => {
    axios.put(`http://localhost:3007/api/v1/news/update/${updateNewsId}`, {
      title: updateNewsTitle,
      description: updateNewsDescription,
    })
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
    
    <div className="container mt-5">
      <h1 style={{ color: '#06b093' , fontSize: '3em' }}>News and Notices</h1>

      <Modal 
  isOpen={modalIsOpen} 
  onRequestClose={() => setModalIsOpen(false)}
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '20px'
    }
  }}
>
  <h2 style={{color: '#06b093'}}>Update News</h2>
  <input 
    style={{width: '100%', padding: '10px', marginBottom: '10px'}} 
    value={updateNewsTitle} 
    onChange={(e) => setUpdateNewsTitle(e.target.value)} 
    placeholder="Title" 
  />
  <textarea 
  style={{width: '100%', padding: '10px', marginBottom: '10px' , height: '100px'}} 
  value={updateNewsDescription} 
  onChange={(e) => setUpdateNewsDescription(e.target.value)} 
  placeholder="Description" 
/>

  <button 
    style={{padding: '10px 20px', backgroundColor: '#06b093', border: 'none', color: '#fff', cursor: 'pointer'}} 
    onClick={saveUpdate}
  >
    Save
  </button>
</Modal>

      <div className="row">
        {news.length > 0 ? (
          news.map((article) => (
            <div className="col-md-3 my-3" key={article._id}>
              <div className="card">
              <img src={article.image ? `http://localhost:3007/${article.image}` : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p onClick={() => navigateToSingleNews(article._id)} className="card-text">{article.description}</p>
                  
               { article.description.length > 30 &&   <a className="card-read-more" onClick={() => navigateToSingleNews(article._id)}>
                    <span   className = "card-span text-primary">Read More</span>
                  </a>}
                  <button 
                      type="button" 
                      class="btn btn-secondary" 
                      onClick={() => updateNews(article._id, article.title, article.description)} 
                      style={{color: '#45a692'}}
                  >
                      Update
                  </button>
                  <button 
                      type="button" 
                      class="btn btn-danger update-btn" 
                      onClick={() => deleteNews(article._id)} 
                      style={{color: 'red'}}
                  >
                      Delete
                  </button>

                </div>
              </div>
            </div>
          ))
        ) : (
          <div class="d-flex justify-content-center">
<div class="spinner-grow text-success" role="status">
   
</div>
</div>
        )}
      </div>
    </div>
  );
};

export default News;
