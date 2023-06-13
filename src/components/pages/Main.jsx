import React, { useContext, useEffect, useState } from "react";
import '../../App.css';
import BookService from "../../API/BookService"
import BookList from "../BookList"
import MyNavbar from "../MyNavbar";
import MyModal from "../UI/MyModal/MyModal";
import BookInfo from "../BookInfo";
import { SearchContext, UserContext } from "../../context";
import { useNavigate } from 'react-router-dom'
import Loader from "../UI/Loader/Loader";



function Main() {

  const [books, setBooks] = useState([])
  const [bookInfo, setBookInfo] = useState({})
  const [rec, setRec] = useState([])
  const [user, setUser] = useState({})
  const [modal, setModal] = useState(false)
  const [hov, setHov] = useState(false)
  const [isBookLoading, setIsBookLoading] = useState(false)

  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { me, setMe } = useContext(UserContext)

  const router = useNavigate();



  useEffect(() => {
    fetchRecommendations()
  }, [])

  async function fetchRecommendations() {
    const storedData = localStorage.getItem('user')
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      const recommendation = await BookService.getRecommendations(parsedData.id);
      if (recommendation != undefined) {
        setBooks(recommendation)
      }
    }
  }


  async function postRecommendations() {
    setIsBookLoading(true)
    const storedData = localStorage.getItem('user')
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      let pol = { user_id: parsedData.id }
      const recommendation = await BookService.postRecommendations(pol);
      if (recommendation != undefined) {
        setBooks(recommendation)
      }
    }
    setIsBookLoading(false)
  }

  function search() {
    router('/search')
  }


  const btnStyle1 = {
    backgroundColor: "#9999C3",
    borderColor: "#9999C3",
};

const btnStyle2 = {
    backgroundColor: "#585B9A",
    borderColor: "#585B9A",
};

  return (
    <div className="App" >
      <MyNavbar
        fun={search}
      />
      <hr style={{ border: 'none', backgroundColor: '#9999C3', height: 1 }} />
      <div className="container">
        <div class="row justify-content-md-center">
          <div className="col-12">
            <MyModal visible={modal} setVisible={setModal}>
              <BookInfo
                bookInfo={bookInfo} />
            </MyModal>

            <div style={{ color: "#03264F" }}>
              Рекомендации
              {isBookLoading
                ? <div style={{display: 'flex', justifyContent:'center'}}><Loader/></div>
                : <BookList books={books} visible={setModal} setBookInfo={setBookInfo} />
              }

              <div class="row justify-content-center">
                <button 
                  className="btn btn-primary"
                  style={hov ? btnStyle2 : btnStyle1}
                  onMouseEnter={() => setHov(true)}
                  onMouseLeave={() => setHov(false)}
                  onClick={postRecommendations}
                >
                  Обновить Рекомендации
                </button>
                
              </div>
              <br />
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}


export default Main;