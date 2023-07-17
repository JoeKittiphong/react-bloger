import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import "../src/style/Card.css"

function Card({ title, cover, fn }) {
    return (
        <div className='card'>
            <button className='btn' onClick={fn}>
            <Link to={"/content"}>
                <ReactMarkdown className='cover'>{cover}</ReactMarkdown>
                <div>
                <ReactMarkdown className='title'>{title}</ReactMarkdown>
                
                </div>
            </Link>
        </button>
        </div>
    )
}

export default Card