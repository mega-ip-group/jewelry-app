
import React from 'react';
import { Container } from '@mui/system';
import "./TopView.css";

const TopView = () => {
    return (
        <Container>
            <div  className="my-5">
                
                    <div className='deal-card'>
                        <div>
                            <h2>DEAL OF THE DAY</h2>
                            <p>Women’s hats & accessories</p>
                            <button className='btnroundedpy-2bg-lighttext-dark'>DESCOVER NOW</button>
                        </div>
                    </div>
                
               
                    <div className='fashion-card'>
                        <div>
                            <h2 className='fw-bold'>FASHION WEEK</h2>
                            <p>Women’s clothing</p>
                            <button  className='btnroundedpy-2text-white'>DESCOVER NOW</button>
                        </div>
                    </div>
                
            </div>
        </Container>
    );
};

export default TopView;