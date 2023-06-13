import React from "react";



const BookItem = ({books, visible, setBookInfo}) => {

    function truncateString(string, maxLength) {
        if (string.length <= maxLength) {
            return string;
        }

        const truncatedString = string.substr(0, maxLength);
        const lastSpaceIndex = truncatedString.lastIndexOf(' ');

        if (lastSpaceIndex === -1) {
            return truncatedString + '...';
        }

        return truncatedString.substr(0, lastSpaceIndex) + '...';
    }

    function fun(){
        setBookInfo(books)
        visible(true) 
    }

    return (

        <div class="card col-2 mt-4"
            style={{
                width: '8rem', backgroundColor: '#F4F9E9', border: 2, border: 'solid', borderColor: '#9999C3'
                , borderRadius: 10, cursor: 'pointer' , margin: 2, marginBottom: 0
            }} onClick={fun} title={books.book_title}>
            <img src={books.image_url_l} class="card-img-top my-3" alt="..." height={180}  />
            <p class="mx-3" style={{ fontSize: 20 + "px", transform:'rotate(270deg)', whiteSpace:'nowrap', marginTop:300}}>
                <h4>
                    {truncateString(books.book_title, 30)}
                </h4>

                {books.book_author}
            </p>
        </div>

    );
}

export default BookItem;