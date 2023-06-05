import React, { useContext, useEffect, useState } from "react";
import '../../App.css';
import BookService from "../../API/BookService"
import BookList from "../BookList"
import MyNavbar from "../MyNavbar";
import MyModal from "../UI/MyModal/MyModal";
import BookInfo from "../BookInfo";
import { SearchContext, UserContext } from "../../context";
import { useNavigate } from 'react-router-dom'



function Main() {

  const [books, setBooks] = useState([])
  const [bookInfo, setBookInfo] = useState({})
  const [rec, setRec] = useState([])
  const [user, setUser] = useState({})
  const [modal, setModal] = useState(false)

  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { me, setMe } = useContext(UserContext)

  const router = useNavigate();



  useEffect(() => {
    fetchUser();
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

  console.log(user)

  async function postRecommendations() {
    const storedData = localStorage.getItem('user')
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      let pol = { user_id: parsedData.id }
      console.log(pol)
      const recommendation = await BookService.postRecommendations(pol);
      if (recommendation != undefined) {
        setBooks(recommendation)
      }
    }
  }

  function search() {
    router('/search')
  }

  function fetchUser() {

  }

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
              <BookList
                books={books}
                visible={setModal}
                setBookInfo={setBookInfo} />
              <div class="row justify-content-between">
                <button onClick={postRecommendations}>
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