import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Loader from '../components/common/loader';
import Tip from '../components/tip';


async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "tips"))

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()});
    });
    return data;
    
}

const CampingTips = () => {

    const [tipsData, setTipData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log(tipsData[0]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setTipData(data);
            setIsLoading(false);
        }
        fetchData();
        
    }, []);

    if (isLoading) return <Loader />;

    return (
        <div className='page-container'>
            <h1>Explore</h1>
            {tipsData[0] ? (
                <div id="tipsWrap">
                    <div className="container">
                        {tipsData.map((tip, index) => (
                            <Tip
                                key={index}
                                title={tip.Title}
                                body={tip.Body}
                            /> 
                        ))}
                    </div>
                </div>
            ) : (
                <p>There are no tips to be found.</p>
            )}
        </div>    
    );
};


export default CampingTips;