import React, { useContext, useState } from "react";
import '../App.css'
import MyButton from "./UI/mybutton/myButton";
import MyInput from "./UI/input/MyInput";
import { SearchContext } from "../context";
import { useNavigate } from 'react-router-dom'




const MyNavbar = (props) => {

    const [hov, setHov] = useState(false)
    const { searchQuery, setSearchQuery } = useContext(SearchContext)
    const router = useNavigate();

    const btnStyle1 = {
        backgroundColor: "#9999C3",
        borderColor: "#9999C3",
    };

    const btnStyle2 = {
        backgroundColor: "#585B9A",
        borderColor: "#585B9A",
    };


    return (
        <nav class="navbar navbar-light mx-5" style={{ flexWrap: 'nowrap'}}>
            <a class="navbar-brand" href="home" style={{ fontSize: 32 + "px", color: "#03264F" }}>
                <img src="images/logo.png" style={{ height: 50 + 'px', width: 50 + 'px' }} />
                <span class="mx-3">
                    ReadRight
                </span>
            </a>

            <div class="input-group mb-3 pt-3">
                <input type="text" class="form-control"
                    placeholder="Поиск..."
                    value={searchQuery.searchQuery}
                    onChange={e => setSearchQuery({ ...searchQuery, searchQuery: e.target.value })}
                    style={{ maxWidth: 700 }}
                />
                <button
                    className="btn btn-primary"
                    type="button"
                    id="button-addon2"
                    style={hov ? btnStyle2 : btnStyle1}
                    onMouseEnter={() => setHov(true)}
                    onMouseLeave={() => setHov(false)}
                    onClick={props.fun}
                >
                    Найти
                </button>
            </div>
            <a class="navbar-brand mx-3" href="profile">
                <img src="images/profile.png" width="50" height="50" />
            </a>
        </nav>

    )
}

export default MyNavbar;