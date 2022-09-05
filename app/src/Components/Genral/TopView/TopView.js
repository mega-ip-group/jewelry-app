
import React from 'react';
import { Container } from '@mui/system';
import "./TopView.css";
import img1 from "../../../images/sw1.png"
import img2 from "../../../images/sw2.png"
const TopView = () => {
    return (
        <Container>
            <div  className="my-5">
                    <div className='deal-card'>
                        <div>
                        <img src={img1} alt='' className='img1'/>
                            <h2>DEAL OF THE DAY</h2>
                            <p>Women’s hats & accessories</p>
                            <button className='btnroundedpy-2bg-lighttext-dark'>DESCOVER NOW</button>
                        </div>
                    </div>
                
                    <div className='fashion-card'>
                        <div>
                            <img src={img2} alt='' className='img2'/>
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