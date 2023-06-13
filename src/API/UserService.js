import axios from "axios";

export default class UserService{
    
    static async authUser(user){
        try{
            const response = await axios.post('http://127.0.0.1:8000/auth/token/login/', user)
            return response.data
        }
        catch(e){
            console.log(e)
        }
    }

    static async regUser(newUser){
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/users/',newUser)
            return response.data
        }
        catch(e){
            console.log(e)
        }
    }

    static async getUser(username){
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/v1/user/?username='+username)
            return response.data
        }   
        catch(e){
            console.log(e)
        }
    }

    static async postRating(user){
        try{
            await axios.post('http://127.0.0.1:8000/api/v1/rating/', user)
        }
        catch(e){
            console.log(e)
        }
    }
}