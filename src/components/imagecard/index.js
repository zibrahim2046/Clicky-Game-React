import React from 'react';
import './style.css';

export default function Card(props) {
    return (
        <img onClick={() => props.findCharacters(props.id)} className='image col-md' src={props.image} alt={props.id} />
    );
}
