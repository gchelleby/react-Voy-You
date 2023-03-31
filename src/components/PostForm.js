import { useState, useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'

export default function PostForm() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const { addPost } = useContext(DataContext)

    async function handleSubmit(e) {
        e.preventDefault()
        const newPost = await addPost(title, body)
        setTitle('')
        setBody('')
    }

    return (
        <form className='input-container' onSubmit={handleSubmit}>
            <div>
                <input className='titlebox'
                placeholder='Give your post a catchy title!'
                    type="text" 
                    name="title" 
                    id="title" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>
            <div>
                <textarea className='bodybox'
                placeholder="What's on your mind?"
                    name="body" 
                    id="body" 
                    cols="100" 
                    rows="15"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                ></textarea>
            </div>
            <button className='post-button btn-no-back'>Add Post</button>
        </form>
    )
}