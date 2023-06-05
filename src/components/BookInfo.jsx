import React from "react";

const BookInfo = ({ bookInfo }) => {

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
                            {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}> */}
                            <div className="d-fle justify-content-start">
                                <input type="range" id="rate" name="rate" min="1" max="10" />
                                <label className="mx-4" htmlFor="rate">10</label>
                                <button className="mr-auto">
                                    Оценить
                                </button>
                            </div>

                            <button className="ml-auto">
                                Добавить в прочитанное
                            </button>


                            {/* </div> */}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default BookInfo;
