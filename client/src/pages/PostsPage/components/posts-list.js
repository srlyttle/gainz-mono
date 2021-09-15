import PropTypes from 'prop-types'
import React from 'react'
import styles from './posts-list.css'

const wwrapperStyle = {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
}
export const PostsList = ({ posts }) => {
    return (
        <div style={wwrapperStyle} className={styles.container}>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

PostsList.propTypes = {
    posts: PropTypes.array,
}
