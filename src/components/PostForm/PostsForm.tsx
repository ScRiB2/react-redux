import React, { useState } from 'react'
import Button from '../Button/Button'
import styles from './PostsForm.module.scss'

interface IProps {}

const PostForm: React.FC<IProps> = (props) => {
  const [title, setTitle] = useState('')

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(title)
    const newPost = { title, id: Date.now().toString() }
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
