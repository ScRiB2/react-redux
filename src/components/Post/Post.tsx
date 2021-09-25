import React from 'react'
import styles from './Post.module.scss'
import { IPost } from '../../interfaces/post'

interface IProps {
  post: IPost
}

export default ({ post }: IProps) => (
  <div className={styles.post}>
    <div className={styles.postBody}>
      <h3>{post.title}</h3>
    </div>
  </div>
)
