import React from 'react'
import Title from './Title'
export default function Header(props) {
    return (
        <>
            <div className="header">
                <h1>{props.name}</h1>
            </div>
        </>
    );
}
