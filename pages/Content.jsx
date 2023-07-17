import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { useRecoilValue } from 'recoil'
import { postData } from '../store/storage'
import ReactMarkdown from 'react-markdown'
import "../src/style/Content.css"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Content() {
  const postValue = useRecoilValue(postData)
  return (
    <div className='content'>
      <Navbar />
      <div className='edit-btn'>
        <button>
          <Link to={"/editPost"}>edit post</Link>
        </button>
      </div>
      <div className='post'>
        <ReactMarkdown>{postValue.cover}</ReactMarkdown>
        <h1>{postValue.title}</h1>
        <ReactMarkdown>{postValue.content}</ReactMarkdown>
      </div>
      <Footer/>
    </div>
  )
}

export default Content