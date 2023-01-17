import { useEffect, useState } from "react";

import "./Buttons.css";

const Buttons = () => {
    const [lightOrDark, setLightOrDark] = useState("black");
    const click = (lightOrDark) => {
        setLightOrDark(lightOrDark);
    };

    useEffect(() => {
        // document.body.querySelector("text-entry").style.backgroundColor =
        //     lightOrDark;
        document.body.style.backgroundColor = lightOrDark;
    }, [lightOrDark]);

    return (
        <div>
            <div className="menu-items">
                <button>MyPad</button>
                <button>File</button>
                <button>Edit</button>
                <button onClick={() => click("gray")}>Light Mode</button>
            </div>
        </div>
    );
};

export default Buttons;
