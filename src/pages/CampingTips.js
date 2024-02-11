import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Loader from '../components/common/loader';
import { Link } from 'react-router-dom';
import Button from '../components/common/button';
import Tip from '../components/tip';

import '../styles/tips.css';


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

    const user = useSelector((state) => state.data.user.user);

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
            <h1>Camping Tips</h1>
            {user && (
                    <>
                        <Link to={`/submit-a-tip`}>
                            <Button className="btn">Submit a Tip</Button>
                        </Link>
                    </>
                )}
            {tipsData[0] ? (
                <div className="tips-grid">
                    {tipsData.map((tip, index) => (
                        <Tip
                            key={index}
                            title={tip.Title}
                            body={tip.Body}
                        /> 
                    ))}
                </div>
            ) : (
                <p>There are no tips to be found.</p>
            )}
        </div>    
    );
};


export default CampingTips;