import React from 'react'
import Button from '../Button/Button'
import Post from '../Post/Post'

interface IProps {
  posts: number[]
}

export default ({ posts }: IProps) => {
  if (!posts.length) {
    return (
      <Button btnStyle={'green'}>
        <p>Load Posts</p>
      </Button>
    )
  }

  return (
    <>
      {posts.map((post) => (
        <Post key={post} />
      ))}
    </>
  )
}
