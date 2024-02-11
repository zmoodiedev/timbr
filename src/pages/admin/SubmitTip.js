import React, { useState } from "react";
import Editor from "../../core/Editor";

// Initial Data
const INITIAL_DATA = {

    blocks: [
      {
        type: "header",
        data: {
          text: "Tip Title",
          level: 1,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Tip Body",
          level: 2,
        },
      },
    ],
  };

const SubmitTip = () => {
    const [data, setData] = useState(INITIAL_DATA);
    return (
        <div className="page-container">
            <h1>Submit a Tip</h1>
            <div className="editor">
            <Editor data={data} onChange={setData} editorblock="editorjs-container" />
            <button
                className="savebtn"
                onClick={() => {
                alert(JSON.stringify(data));
                }}
            >
                Save
            </button>
            </div>
        </div>
    );
};

export default SubmitTip;