import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import "../src/style/EditPost.css"
import { useRecoilValue } from 'recoil'
import { postData } from '../store/storage'
import axios from 'axios'

function EditPost() {
  const postVals = useRecoilValue(postData)
  const [title, setTitle] = useState(postVals.title)
  const [cover, setCover] = useState(postVals.cover)
  const [content, setcontent] = useState(postVals.content)

  const editPost = async () => {
    await axios.put(
      `https://easy-rose-shark-gown.cyclic.app/update/${postVals._id}`,
      {
        title: title,
        cover: cover,
        content: content
      }).then((res) => {
        console.log(res);
        alert(`${postVals.title} updated`)
      }).catch(err => {
        console.log(err);
      })
  }
  const deletePost = async () => {
    await axios.delete(
      `https://easy-rose-shark-gown.cyclic.app/delete/${postVals._id}`).then((res) => {
        console.log(res);
        alert(`${postVals.title} deleted`)
      }).catch(err => {
        console.log(err);
      })
  }
  return (
    <div>
      <Navbar />
      <div className='edit-post'>
        <div className='delete-btn'>
          <button onClick={deletePost}>delete post "{postVals.title}"</button>

        </div>
        <div>
          <p htmlFor="title">title</p>
          <input name='title' onChange={(e) => setTitle(e.target.value)} value={title} type="text" />
        </div>
        <div>
          <p htmlFor="cover">Cover image link</p>
          <input name='cover' onChange={(e) => setCover(e.target.value)} value={cover} type="text" />
        </div>
        <div>
          <p htmlFor="content">Markdown content</p>
          <textarea name='content' onChange={(e) => setcontent(e.target.value)} value={content} type="text" />
        </div>
        <button onClick={editPost}>submit Post</button>
      </div>
    </div>
  )
}

export default EditPost