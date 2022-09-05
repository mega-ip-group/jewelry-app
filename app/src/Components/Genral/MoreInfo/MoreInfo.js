import React from 'react';
import { Container } from '@mui/system';
import img from '../../../images/img-7.jpg';
import "./MoreInfo.css"
const MoreInfo = () => {
    return (
        <div className='mt-5'>
            <Container>
                <div className='text-centermy-5'>
                    <h1 className='fs-3fw-normal'>Latest Collections</h1>
                    <h2 className='fw-boldfs-1text-muted'>Spring Summer Clearance <br /> Women’s Sales</h2>
                </div>
                <div xs={1} md={2} className='gy-5d-flexalign-items-centerjustify-content-center'>
                    <div className='image1'>
                        <img width='100%' src={img} alt="" />
                    </div>


                    <div>
                        <div className='text-center'>
                            <h2 className='fw-normal fs-1'>Deals of the day</h2>
                            <p className='fs-5'><small>Expired</small></p>
                            <h2 className='text-muted'>Evolution T-Shirt</h2>
                            <p>$250.00 <s>$298.00</s></p>
                            <button className='btn-regular'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MoreInfo;