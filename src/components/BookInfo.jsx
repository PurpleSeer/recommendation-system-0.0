import React, { useState } from "react";
import UserService from "../API/UserService";

const BookInfo = ({ bookInfo }) => {

    const [hov, setHov] = useState(false)
    const [hov2, setHov2] = useState(false)

    const [rate, setRate] = useState(0)
    const [rating, setRating] = useState({})

    const btnStyle1 = {
        backgroundColor: "#9999C3",
        borderColor: "#9999C3",
    };

    const btnStyle2 = {
        backgroundColor: "#585B9A",
        borderColor: "#585B9A",
    };

    const postRating = async (newRating) => {
        await UserService.postRating(newRating)
    }

    const addRating = (e) => {
        e.preventDefault()
        const storedData = localStorage.getItem('user')
        if (storedData) {
          const parsedData = JSON.parse(storedData)
            let rating = {user_id: parsedData.id, book_id: bookInfo.id, book_rating: 0}
            postRating(rating)
            alert('Книга успешно добавлена')
        }
    }

    const addRatingWithRate = (e) => {
        e.preventDefault()
        const storedData = localStorage.getItem('user')
        if (storedData) {
            const parsedData = JSON.parse(storedData)
            let rating = {user_id: parsedData.id, book_id: bookInfo.id, book_rating: rate}
            postRating(rating)
            setRate(0)
            alert('Книга успешно оценена')
            
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <img src={bookInfo.image_url_l} alt="Картинка" className="img-fluid" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                </div>
                <div className="col-9">
                    <div className="d-flex flex-column h-100">
                        <p>
                            Название книги: {bookInfo.book_title}<br />
                            Автор книги: {bookInfo.book_author}<br />
                            Год публикации: {bookInfo.year_of_publication}<br />
                            Издатель: {bookInfo.publisher}
                        </p>
                        <div className="mt-auto d-flex justify-content-between">
                            <div className="d-flex justify-content-start">
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={rate}
                                    onChange={e => setRate(e.target.value)}
                                />
                                <label className="mx-4" htmlFor="rate">{rate}</label>
                                <button
                                    className="btn btn-primary"
                                    style={hov ? btnStyle2 : btnStyle1}
                                    onMouseEnter={() => setHov(true)}
                                    onMouseLeave={() => setHov(false)}
                                    onClick={addRatingWithRate}
                                >
                                    Оценить
                                </button>
                            </div>
                            <button
                                className="btn btn-primary"
                                style={hov2 ? btnStyle2 : btnStyle1}
                                onMouseEnter={() => setHov2(true)}
                                onMouseLeave={() => setHov2(false)}
                                onClick={addRating}
                            >
                                Добавить в прочитанное
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BookInfo;
