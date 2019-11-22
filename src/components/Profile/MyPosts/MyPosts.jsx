import React from 'react';
import s from './MyPosts.module.scss'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} /> )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
       <div className={s.myPosts}>
            <div className={s.newPost}>
                <h3>
                    Add new post
                </h3>
                <textarea ref={newPostElement} 
                          onChange={ onPostChange } 
                          value={props.newPostText} 
                          placeholder='Enter message' 
                />
                <button className={`${s.btn} btn`} onClick={ addPost } >
                    Add post
                </button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
       </div>
    )
}

export default MyPosts;