import { useContext } from "react";
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import { DataContext } from '../contexts/DataProvider'
import { AuthContext } from '../contexts/AuthProvider'

export default function Board() {
    const { posts } = useContext(DataContext)
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1 className="msg-brd">Message Board</h1>
            <div className="btn-card">
                {
                    (user.loggedIn) ?
                        <Link to="/createpost"><button className="postbtn">Create Post</button></Link>:
                        <Link to="/signin"><button className="postbtn">Create Post</button></Link>
                }

            </div>
            {posts.map((post) => <Post post={post} key={post.id} />)}

        </div>
    )
}