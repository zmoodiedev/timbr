import React, { useState } from "react";
import {db} from "../firebase";

function Fetch() {

    const [allDocs, setAllDocs] = useState([]);

    function fetchAll(e) {
        e.preventDefault();
        db.collection("Campgrounds")
        .get()
        .then((snapshot) => {
            if(snapshot.docs.length > 0) {
                snapshot.docs.forEach((doc) => {
                    setAllDocs((prev) => {
                        return[...prev, doc.data()];
                    });
                });
            }
        });

        console.log(allDocs);
    };

    return (
        <div>
            <h1>Fetching Data</h1>
            <button onClick={fetchAll}>Fetch that shiz</button>
        </div>
    )
}

export default Fetch;