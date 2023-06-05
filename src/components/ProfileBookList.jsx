import React from "react";
import ProfileBookItem from "./ProfileBookItem";

const ProfileBookList = ({books, visible, setBookInfo, ratings}) => {

    if(!books.length) {
        return <h1 style={{textAlign: 'center', marginTop:50}}>Книги не найдены</h1>
    }

    return(
        <div>
            {books.map((books, index) =>
                <ProfileBookItem key={books.id} books={books} visible={visible} setBookInfo={setBookInfo} ratings={ratings[index]} />
            )}
        </div>
    )
}

export default ProfileBookList;