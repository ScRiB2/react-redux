import React from 'react'
import styles from './Post.module.scss'

interface IPost {
  title: string
}

interface IProps {
  post: IPost
}

export default () => {
  return (
    <div className={styles.post}>
      <div className={styles.postBody}>
        <h3>Title</h3>
      </div>
    </div>
  )
}
