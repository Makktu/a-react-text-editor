// import ButtonOne from "./ButtonOne/ButtonOne";

import "./Component.css";

function Component() {
    // ************************************
    // * BASIC HTML STRUCTURE FOR THE APP *
    // ************************************
    return (
        <div>
            <div className="container">
                <div className="editor-frame">
                    <div className="menu-items">
                        <button>MyPad</button>
                        <button id="file-btn">File</button>
                        <button>Edit</button>
                        <button id="light-dark-btn">Light Mode</button>
                    </div>
                    <div className="text-entry">
                        <textarea
                            className="text-entry-area"
                            placeholder="Start typing to edit this document. Click 'File' to Save or Load other documents."
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Component;
