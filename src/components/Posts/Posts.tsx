import React from 'react'
import Post from '../Post/Post'

interface IProps {
  posts: number[]
}

export default ({ posts }: IProps) => {
  if (!posts.length) {
    return <p className="text--small">Posts not found</p>
  }

  return (
    <>
      {posts.map((post) => (
        <Post key={post} />
      ))}
    </>
  )
}
