import axios from "axios";

export default class BookService{
    static async getBooks(){
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/v1/book/?page=1')
            return response.data
        }
        catch(e){
            console.log(e);
        }
    }

    static async getRecommendations(user_id){
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/v1/recommended/'+user_id)
            return response.data
        }
        catch(e){
            console.log(e)
        }
    }

    static async postRecommendations(user_id){
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/v1/recommendation/', user_id)
            return response.data
        }
        catch(e){
            console.log(e)
        }
    }

    static async getSearchedBooks(searchQuery, page){
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/v1/bookbyname/',{
                params: {
                    keyword: searchQuery,
                    page: page
                }
            })
            return response.data
        }
        catch(e){
            console.log(e)
        }
    }

    static async getUsersRatings(user_id){
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/v1/ratingbyname/',{
                params:{
                    user_id: user_id
                }
            })
            return response.data
        }
        catch(e){
            console.log(e)
        }
    }

    static async getBooksForUser(user_id){
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/v1/booksforuser/',{
                params:{
                    user_id: user_id
                }
            })
            return response.data
        }
        catch(e){
            console.log(e)
        }
    }

}