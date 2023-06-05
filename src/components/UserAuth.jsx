import React, { useState, useContext } from "react";
import MyInput from "./UI/input/MyInput";
import UserService from "../API/UserService";
import { UserContext } from "../context";
import {useNavigate} from 'react-router-dom'




const UserAuth = () => {

    const [user,setUser] = useState({username:'', password:''})
    const { me, setMe } = useContext(UserContext);
    const router = useNavigate();



    const authUser = (e) => {
        if (user.username!=="") {
            if(user.password!=="")
            auth(user)
            else{
                alert("Введите пароль!")
            }
        }
        else{
            alert("Введите имя пользователя!")
        }
        // auth(user)
        // setUser({customer_name: '', deadline: '', fish_amount: '', kind_of_fish_id: ''})
      }

    const auth = async (User) => {
        const token = await UserService.authUser(User)
        const userInfo = await UserService.getUser(user.username)
        console.log(userInfo)
        if(token!==undefined){
            setMe(userInfo)
            console.log(me)
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('user', JSON.stringify(userInfo))
            router('/home')
        }
        else{
            setUser({password:''})
            alert("Проверьте правильность введенных данных")         
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Авторизация</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 100 + '%' }}>
                    <MyInput 
                        placeholder="Имя пользователя" 
                        value={user.username}
                        onChange={e => setUser({...user, username: e.target.value})}
                    />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 100 + '%' }}>
                    <MyInput 
                        placeholder="Пароль" 
                        value={user.password}
                        onChange={e => setUser({...user, password: e.target.value})}
                        type='password'
                    />
                </div>
            </div>
            <div className="d-flex justify-content-between mt-5">
                <a href="signup">
                    <button>Регистрация</button>
                </a>
                <button onClick={authUser}>Авторизироваться</button>
            </div>
        </div>
    )
}

export default UserAuth;