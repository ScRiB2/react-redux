import React from 'react'
import Post from '../Post/Post'
import { useAppSelector } from '../../redux/hooks'
import { selectSyncPosts } from '../../redux/reducers/postsReducer'

export default () => {
  const posts = useAppSelector(selectSyncPosts)

  if (!posts.length) {
    return <p className="text--small">Posts not found</p>
  }

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}
