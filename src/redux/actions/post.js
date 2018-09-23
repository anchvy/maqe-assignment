import axios from './axios'
import types from '../types/post'
import { timeSince } from '../../utils/datetime'

/**
 * action creator:: start fetch
 *
 * @return  {{type: string}}
 */
const fetchStart = () => ({
  type: types.FETCH_LIST,
})

/**
 * action creator:: fetch failure
 *
 * @return  {{type: string}}
 */
const fetchFailure = () => ({
  type: types.FETCH_LIST_FAILURE,
})

/**
 * action creator:: fetch success
 *
 * @return  {{type: string, payload: *}}
 */
const fetchSuccess = ({ list }) => ({
  type: types.FETCH_LIST_SUCCESS,
  payload: {
    list,
  },
})

// OPERATIONS

/**
 * Fetch post list from network
 */
function fetchPostList() {
  return async dispatch => {
    dispatch(fetchStart())

    try {
      const [postsResponse, authorsResponse] = await axios.all([
        axios.get('/posts.json'),
        axios.get('/authors.json'),
      ])
      const { data: posts } = postsResponse
      const { data: authors } = authorsResponse

      // Mapped authors to object to re-create posts with author data
      const authorsObject = authors.reduce(
        (result, author) => ({ ...result, [author.id]: author }),
        {}
      )

      // Merged data post & author and convert timeSince
      const list = posts.map(post => ({
        ...post,
        author: authorsObject[post.author_id],
        timeSince: timeSince(post.created_at),
      }))

      dispatch(fetchSuccess({ list }))
    } catch (error) {
      dispatch(fetchFailure())
    }
  }
}

export default {
  fetchPostList,
}
