import React, { useState } from 'react'
import Button from '../Button/Button'
import styles from './PostsForm.module.scss'
import { useAppDispatch } from '../../redux/hooks'
import { createPost } from '../../redux/reducers/postsReducer'

const PostForm = () => {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState('')

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newPost = { title, id: Date.now().toString() }
    dispatch(createPost(newPost))
    setTitle('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.form}>
        <label htmlFor="title" className={styles.label}>
          Post title
        </label>
        <input className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="title" />
      </div>
      <Button btnStyle="orange" type="submit">
        <p>Create</p>
      </Button>
    </form>
  )
}

export default PostForm
