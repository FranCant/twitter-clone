import { Comment } from '../typings'

export const fetchComments = async (tweetId: string) => {
  const res = await fetch(`/api/getComments?tweetId=${tweetId}`)

  //   Comment[] corresponds to a comment typings
  const comments: Comment[] = await res.json()
  return comments
}