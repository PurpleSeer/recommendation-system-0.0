import React, { useContext, useState } from "react";
import MyInput from "./UI/input/MyInput";
import UserService from "../API/UserService";
import { UserContext } from "../context";
import {useNavigate} from 'react-router-dom'

const UserReg = () => {
    const [newUser, setNewUser] = useState({username:'', password:''});
    const router = useNavigate();
    const [hov, setHov] = useState(false)
    const [hov2, setHov2] = useState(false)

    const addNewUser = (e) => {
        e.preventDefault()
        if (newUser.username!=="" && newUser.password!=="") {
            createNewOrder(newUser) 
        }

        else{
            alert("Заполните обязательные поля 'Имя пользователя' и 'Пароль'!!!")
        }
    }

    const createNewOrder = async (newUser) => {
        const user = await UserService.regUser(newUser)
        console.log(user)
        if(user!=undefined){
            // setMe(user)
            setNewUser({ username: '', first_name: '', last_name: '', email: '', password: '' })
            alert("Пользователь успешно зарегистрирован")
            router('/login')
        }
        else if(newUser.password.length <8){
            alert("Введенный пароль слишком короткий!!!")
        }
        else{
            alert("Пароль слишком ненаджёный или похож на 'Имя пользователя'")
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
            <h2>Регистрация</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 100 + '%' }}>
                    <MyInput
                        placeholder="Имя пользователя*"
                        value={newUser.username}
                        onChange={e => setNewUser({ ...newUser, username: e.target.value })}
                    />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 100 + '%' }}>
                    <MyInput
                        placeholder="Адрес электронной почты"
                        value={newUser.email}
                        onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                    />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 100 + '%' }}>
                    <MyInput
                        placeholder="Пароль(минимум 8 символов)*"
                        value={newUser.password}
                        onChange={e => setNewUser({ ...newUser, password: e.target.value })}
                        type='password'
                    />
                </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
                <a href="login">
                    <button
                        className="btn btn-primary"
                        style={hov ? btnStyle2 : btnStyle1}
                        onMouseEnter={() => setHov(true)}
                        onMouseLeave={() => setHov(false)}
                    >Авторизация</button>
                </a>

                <button
                    onClick={addNewUser}
                    className="btn btn-primary"
                    style={hov2 ? btnStyle2 : btnStyle1}
                    onMouseEnter={() => setHov2(true)}
                    onMouseLeave={() => setHov2(false)}
                >Зарегистрировать</button>
            </div>
        </div>
    )
}

export default UserReg;