import React from 'react';
import { Container } from '@mui/system';
// import { useHistory } from 'react-router-dom';
import './Service.css';
const Service = () => {
    // const navigate = useHistory();
    // const handleChange = () => {
    //     navigate.push(`/jewellery`)
    // }
    return (
        <Container className='custom-service'>
            <div xs={1} md={3} className="g-4">
                <div>
                    <div className='woman-card'>
                        <div>
                            <h5 style={{ color: '#f44c7a' }}>Girls Accessories</h5>
                            <p className='text-muted'>3000+ Products</p>
                            <button  className='btn-service'>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='man-card'>
                        <div>
                            <h5 style={{ color: '#03a98a' }}>Men Accessories</h5>
                            <p className='text-muted'>4000+ Products</p>
                            <button className='btn-service'>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='kid-card'>
                        <div>
                            <h5 style={{ color: '#f77527' }}>Kids Accessories</h5>
                            <p className='text-muted'>302+ Kids Products</p>
                            <button className='btn-service'>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Service;