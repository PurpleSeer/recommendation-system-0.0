import React, { useContext, useState } from "react";
import MyInput from "./UI/input/MyInput";
import UserService from "../API/UserService";
import { UserContext } from "../context";
import {useNavigate} from 'react-router-dom'

const UserReg = () => {
    const [newUser, setNewUser] = useState({username:'', password:''});
    const router = useNavigate();

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
            alert("Пользователь успешно зарегестрирован")
            router('/login')
        }
        else if(newUser.password.length <8){
            alert("Введенный пароль слишком короткий!!!")
        }
        else{
            alert("Что-то пошло не по плану, проверьте правильность введенных данных!!!")
        }
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Регистрация</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 100 + '%' }}>
                    <MyInput
                        placeholder="Имя пользователя"
                        value={newUser.username}
                        onChange={e => setNewUser({ ...newUser, username: e.target.value })}
                    />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 100 + '%' }}>
                    <MyInput
                        placeholder="Имя"
                        value={newUser.first_name}
                        onChange={e => setNewUser({ ...newUser, first_name: e.target.value })}
                    />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 100 + '%' }}>
                    <MyInput
                        placeholder="Фамилия"
                        value={newUser.last_name}
                        onChange={e => setNewUser({ ...newUser, last_name: e.target.value })}
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
                        placeholder="Пароль(минимум 8 символов)"
                        value={newUser.password}
                        onChange={e => setNewUser({ ...newUser, password: e.target.value })}
                        type='password'
                    />
                </div>
            </div>
            <div className="d-flex justify-content-between mt-5">
                <a href="login">
                    <button>Авторизация</button>
                </a>

                <button onClick={addNewUser}>Зарегистрировать</button>
            </div>
        </div>
    )
}

export default UserReg;