import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Loader from '../components/common/loader';
import { Link } from 'react-router-dom';
import Button from '../components/common/button';
import TipCard from '../components/tipCard';

import '../styles/campingTips.css'
import '../styles/tipsList.css';


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
        <>
            <div className="page-header tips">
                <h1>Camping Tips</h1>
            </div>
            <div className='page-container'>
                
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
                            <TipCard
                                key={index}
                                title={tip.Title}
                            /> 
                        ))}
                    </div>
                ) : (
                    <p>There are no tips to be found.</p>
                )}
            </div>    
        </>
    );
};


export default CampingTips;