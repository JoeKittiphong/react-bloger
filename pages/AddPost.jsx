import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { redirect } from 'react-router-dom'
import "../src/style/AddPost.css"

function AddPost() {
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")
    const [content, setcontent] = useState("")

    const newPost = async()=>{
        await axios.post(
            "https://easy-rose-shark-gown.cyclic.app/create",
            {title : title,
            cover : cover,
            content : content
        }).then((res)=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        redirect("/")
    }
    return (
        <div className='add-post'>
            <Navbar/>
            <div>
                <p htmlFor="title">Add title</p>
                <input name='title' onChange={(e) => setTitle(e.target.value)} type="text" />
            </div>
            <div>
                <p htmlFor="cover">Cover image link</p>
                <input name='cover' onChange={(e) => setCover(e.target.value)} type="text" />
            </div>
            <div>
                <p htmlFor="content">Markdown content</p>
                <input name='content' onChange={(e) => setcontent(e.target.value)} type="text" />
            </div>
            <button onClick={newPost}>Add Post</button>
        </div>
    )
}

export default AddPost