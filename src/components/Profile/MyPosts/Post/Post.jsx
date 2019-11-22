import React from 'react';
import s from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={s.post}>
            <img className={s.avatar} src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" alt="avatar" />
            <div className={s.postText}>
                { props.message }
            </div>
            <div className={s.likes}>
                <span className={s.like}>Like</span> | {props.likesCount}
            </div>
        </div>
    )
}

export default Post;