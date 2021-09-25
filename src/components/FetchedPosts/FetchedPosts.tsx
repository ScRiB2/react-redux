import React from 'react'
import Button from '../Button/Button'
import Post from '../Post/Post'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchPostsAsync, selectFetchedPosts } from '../../redux/reducers/postsReducer'
import { selectLoading } from '../../redux/reducers/appReducer'
import { Loader } from '../Loader/Loader'

export default () => {
  const dispatch = useAppDispatch()
  const fetchedPosts = useAppSelector(selectFetchedPosts)
  const loading = useAppSelector(selectLoading)

  if (loading) {
    return <Loader />
  }

  if (!fetchedPosts.length) {
    return (
      <Button btnStyle="green" onClick={() => dispatch(fetchPostsAsync())}>
        <p>Load Posts</p>
      </Button>
    )
  }

  return (
    <>
      {fetchedPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}
