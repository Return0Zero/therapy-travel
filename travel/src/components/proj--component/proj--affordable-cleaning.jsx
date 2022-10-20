import React from 'react';
import './proj--affordable-cleaning.css';
import AffordableLogo from '../../images/projects/affordable/horizontal-logo.png';
import PlusButton from '../../images/icons/plus-button.svg';
import WebButton from '../../images/icons/web-button.png';
import CodingButton from '../../images/icons/coding-button.svg';

import AffordableHeader from '../../images/projects/affordable/affordable.png'


const ProjAffordable = () => {
    return (
        <div className='proj--component'>
            <div className='proj--logo-container'>
                <img src={AffordableLogo} alt='Reliable and Affordable Logo' className='affordable-logo' />
            </div>
            <div className='proj--content'>
                <p>Text-to-Speech application made for the Embassy of Honduras in Washington DC. During this project I worked closely with the Ambassador of Honduras and The General Consul of Honduras to develop this project to be used in the entire consular network of Honduras in The United States of America as an emergency method to maintain order during the COVID 19 Pandemic facilitating the communication between the Embassy Agents and the regular public and that way not only did the application was able to improve the workflow, but it was able to free one of the agents needed to call the Honduran Citizens through the building and they were able to return to their regular responsibilities improving even further the workflow that it was placed to adhere to the Social Distancing Guidelines.</p>
            </div>
            <div className='proj--one-images-component'> 
                <div className='proj--image1'>
                    <img src={AffordableHeader} alt='homepage' className='proj---one-image-component' />
                </div>
            </div>
            <div className='proj--buttons-container'>
                <a href='https://github.com/Return0Zero/cleaningllc' target="_blank" rel="noreferrer"><img src={CodingButton} alt='Coding Button' className='proj--buttons'/></a>
                <a href='https://reliableandaffordablecleaning.com/' target="_blank" rel="noreferrer"><img src={WebButton} alt='Web Button' className='proj--buttons'/></a>
            </div>
        </div>
    )
}

export default ProjAffordable;
