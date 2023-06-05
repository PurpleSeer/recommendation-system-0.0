import React, { useState, useContext, useEffect } from "react";
import '../../App.css';
import MyNavbar from "../MyNavbar";
import { SearchContext } from "../../context";
import BookService from "../../API/BookService";
import BookList from "../BookList"
import MyModal from "../UI/MyModal/MyModal";
import BookInfo from "../BookInfo";
import { getPagesArray, getPagesCount } from "../utils/pages";
import { PaginationControl } from 'react-bootstrap-pagination-control';


function Search() {

    const { searchQuery, setSearchQuery } = useContext(SearchContext);
    const [books, setBooks] = useState([]);
    const [bookInfo, setBookInfo] = useState({})
    const [user, setUser] = useState({ user_id: '1' })
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)
    const [nameBook, setNameBook] = useState()

    let pagesArray = getPagesArray(totalPages)

    useEffect(() => {
        fetchBooks();
        setSearchQuery({ searchQuery: '' })
    }, [page])

    useEffect(() => {
        setNameBook(searchQuery.searchQuery)
    }, [])

    async function fetchBooks() {
        const Books = await BookService.getSearchedBooks(searchQuery.searchQuery, page)
        if (Books != undefined) {
            setBooks(Books.results)
            const totalCount = Books.count
            setTotalPages(getPagesCount(totalCount))
        }
        else {
            setBooks([])
        }

    }

    function fun() {
        fetchBooks()
        setNameBook(searchQuery.searchQuery)
    }



    return (
        <div className="App">
            <MyNavbar
                fun={fun}
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
                            Книги по запросу "{nameBook}"
                            <BookList
                                books={books}
                                visible={setModal}
                                setBookInfo={setBookInfo} />
                        </div>
                        <PaginationControl
                            page={page}
                            between={4}
                            total={pagesArray.length}
                            limit={1}
                            changePage={(page) => {
                                setPage(page)
                            }}
                            ellipsis={2}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Search;