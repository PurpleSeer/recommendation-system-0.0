import React, { useContext, useEffect, useState } from "react";
import '../../App.css';
import MyNavbar from "../MyNavbar";
import ProfileBookItem from "../ProfileBookItem";
import { UserContext } from "../../context";
import BookService from "../../API/BookService";
import ProfileBookList from "../ProfileBookList";
import MyModal from "../UI/MyModal/MyModal";
import BookInfo from "../BookInfo";


function Profile() {

    const [user, setUser] = useState({ username: 'zxcDolbaeb' })
    const [ratings, setRatings] = useState([])
    const [books, setBooks] = useState([])
    const [modal, setModal] = useState(false)
    const [bookInfo, setBookInfo] = useState({})

    const { me, setMe } = useContext(UserContext)

    useEffect(() => {
        fetchRatings();
        fetchBooks()
    }, [])


    async function fetchRatings() {
        const storedData = localStorage.getItem('user')
        if (storedData) {
            const parsedData = JSON.parse(storedData)
            setUser(parsedData)
            const Ratings = await BookService.getUsersRatings(parsedData.id)
            if (Ratings != undefined) {
                setRatings(Ratings)
            }
        }
    }

    async function fetchBooks() {
        const storedData = localStorage.getItem('user')
        if (storedData) {
            const parsedData = JSON.parse(storedData)
            const Books = await BookService.getBooksForUser(parsedData.id)
            if (Books != undefined) {
                setBooks(Books)
            }
        }
    }

    return (
        <div className="App">
            <MyNavbar />
            <hr style={{ border: 'none', backgroundColor: '#9999C3', height: 1 }} />
            <div className="container">
                <div class="row justify-content-md-center">
                    <div className="col-10">
                        <MyModal visible={modal} setVisible={setModal}>
                            <BookInfo
                                bookInfo={bookInfo} />
                        </MyModal>
                        <div style={{ color: "#03264F" }}>
                            Профиль {user.username}<br />
                            Список прочитанных книг
                        </div>
                        <ProfileBookList
                            books={books}
                            visible={setModal}
                            setBookInfo={setBookInfo}
                            ratings={ratings}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;