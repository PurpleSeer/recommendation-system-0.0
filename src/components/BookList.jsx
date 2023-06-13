import React from "react";
import BookItem from "./BookItem";


const BookList = ({ books, visible, setBookInfo }) => {

    if (!books.length) {
        return <h1 style={{ textAlign: 'center', marginTop: 50 }}>Книги не найдены</h1>
    }

    return (

        <div className="row justify-content-start mb-3">
            {books.map((books, index) => (
                <>
                    <BookItem books={books} key={books.id} visible={visible} setBookInfo={setBookInfo} />
                    {(index % 10 === 9) && <span style={{ borderBottom: '30px solid #522900', marginBottom: 30 }} />}
                </>
            ))}
        </div>

    );
}

export default BookList;