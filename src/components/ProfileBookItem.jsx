import React from "react";

const ProfileBookItem = ({books, visible, setBookInfo, ratings}) => {

    function fun(){
        setBookInfo(books)
        visible(true)
    }

    return (
            <div className='post' onClick={function(event){
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
                    <button style={{ margin: '5px 0', maxWidth:250}}>
                        Удалить из прочитанного
                    </button>
                </div>
            </div>
    )
}

export default ProfileBookItem;