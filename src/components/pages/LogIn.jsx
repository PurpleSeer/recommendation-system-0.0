import React, { useState } from "react";
import '../../App.css';
import MyRegAuth from "../UI/MyRegAuth/MyRegAuth";
import MyInput from "../UI/input/MyInput";
import UserAuth from "../UserAuth";

function LogIn() {

    const [visible, setVisible] = useState(true)

    return (
        <div style={{ color: "#03264F" }}>
            <MyRegAuth visible={visible}>
                <UserAuth/>
            </MyRegAuth>
        </div>
    )
}

export default LogIn;