import React, { useState, useContext } from "react";
import MyInput from "./UI/input/MyInput";
import UserService from "../API/UserService";
import { UserContext } from "../context";
import { useNavigate } from 'react-router-dom'
import BookService from "../API/BookService";




const UserAuth = () => {

    const [user, setUser] = useState({ username: '', password: '' })
    const { me, setMe } = useContext(UserContext);
    const router = useNavigate();
    const [hov, setHov] = useState(false)
    const [hov2, setHov2] = useState(false)





    const authUser = (e) => {
        if (user.username !== "") {
            if (user.password !== "")
                auth(user)
            else {
                alert("Введите пароль!")
            }
        }
        else {
            alert("Введите имя пользователя!")
        }
        // auth(user)
        // setUser({customer_name: '', deadline: '', fish_amount: '', kind_of_fish_id: ''})
    }

    const auth = async (User) => {
        const token = await UserService.authUser(User)
        const userInfo = await UserService.getUser(user.username)
        const books = await BookService.getSearchedBooks('',1)
        console.log(User)
        if (token !== undefined) {
            setMe(userInfo)
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('user', JSON.stringify(userInfo))
            router('/home')
        }
        else if(books===undefined){
            alert("Сервер временно недоступен, попробуйте позже")
        }
        else {
            setUser({ password: '' })
            alert("Проверьте правильность введенных данных")
        }
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
        <div style={{ textAlign: 'center' }}>
            <h2>Авторизация</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 100 + '%' }}>
                    <MyInput
                        placeholder="Имя пользователя"
                        value={user.username}
                        onChange={e => setUser({ ...user, username: e.target.value })}
                    />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 100 + '%' }}>
                    <MyInput
                        placeholder="Пароль"
                        value={user.password}
                        onChange={e => setUser({ ...user, password: e.target.value })}
                        type='password'
                    />
                </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
                <a href="signup">
                    <button
                        className="btn btn-primary"
                        style={hov ? btnStyle2 : btnStyle1}
                        onMouseEnter={() => setHov(true)}
                        onMouseLeave={() => setHov(false)}
                    >Регистрация</button>
                </a>
                <button 
                    onClick={authUser}
                    className="btn btn-primary"
                    style={hov2 ? btnStyle2 : btnStyle1}
                    onMouseEnter={() => setHov2(true)}
                    onMouseLeave={() => setHov2(false)}
                >
                        Авторизироваться</button>
            </div>
        </div>
    )
}

export default UserAuth;