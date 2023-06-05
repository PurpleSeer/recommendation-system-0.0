import React, { useState } from "react";
import '../../App.css';
import MyRegAuth from "../UI/MyRegAuth/MyRegAuth";
import MyInput from "../UI/input/MyInput";
import UserReg from "../UserReg";




function SignUp() {

    const [visible, setVisible] = useState(true)


    return (
        <div style={{ color: "#03264F" }}>
            <MyRegAuth visible={visible}>
                <UserReg/>
            </MyRegAuth>
        </div>
    )
}

export default SignUp;