import React from 'react'
import styles from './App.module.scss'
import Button from './components/Button/Button'
import PostForm from './components/PostForm/PostsForm'
import Posts from './components/Posts/Posts'
import FetchedPosts from './components/FetchedPosts/FetchedPosts'
import { cls } from './utils/utils'

function App() {
  return (
    <div className={cls('main-container', styles.content)}>
      <div className={styles.form}>
        <PostForm />
      </div>
      <div>
        <h2>Sync Posts</h2>
        <Posts posts={[]} />
      </div>
      <div>
        <h2>Async Posts</h2>
        <FetchedPosts posts={[]} />
      </div>
    </div>
  )
}

export default App
