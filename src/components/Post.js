import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Post(props) {
    const [show, setShow] = useState()
    return (
        <div className="view-post">
            <h3>{props.post.title}</h3>
            <div onClick={() => setShow(currentShow => !currentShow)}>
                <button className='expand-btn'>Expand Post</button>
                {show ?
                    <div>
                        <p>{props.post.body}</p>
                        <p>{props.post.dateCreated?.toDate().toString()}</p>
                        <p>Posted By: {props.post.username}</p>
                    </div>
                    :
                    null
                }

            </div>
        </div>
    )
}