import React from "react";
import classes from './MyRegAuth.module.css'

const MyRegAuth = ({children, visible, setVisible}) => {
    const rootClasses = [classes.myRegAuth];

    if(visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.myRegAuthContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyRegAuth;