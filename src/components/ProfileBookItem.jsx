import React from "react";
import { useState } from "react";

const ProfileBookItem = ({ books, visible, setBookInfo, ratings }) => {

    const [hov, setHov] = useState(false)


    function fun() {
        setBookInfo(books)
        visible(true)
    }

    const btnStyle1 = {
        backgroundColor: "#9999C3",
        borderColor: "#9999C3",
        margin: '5px 0'
    };

    const btnStyle2 = {
        backgroundColor: "#585B9A",
        borderColor: "#585B9A",
        margin: '5px 0'
    };


    return (
        <div className='post' onClick={function (event) {
            let target = event.target;
            if (target.tagName === 'BUTTON') {
                return;
            }
            fun();
        }}>
            <div className='post__content' >
                <strong>{books.book_title}</strong>
                <div>
                    Оценка: {ratings.book_rating}
                </div>
            </div>
            <div className='post__btns'>
                <button
                    className="btn btn-primary"
                    style={hov ? btnStyle2 : btnStyle1}
                    onMouseEnter={() => setHov(true)}
                    onMouseLeave={() => setHov(false)}
                >
                    Удалить из прочитанного
                </button>
            </div>
        </div>
    )
}

export default ProfileBookItem;