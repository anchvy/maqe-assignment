import types from '../types/post'

const initialState = {
  isLoading: false,
  isError: false,
  list: [],
}

export default function post(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_LIST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case types.FETCH_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        list: state.list.concat(action.payload.list),
      }
    }

    case types.FETCH_LIST_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }

    default: {
      return state
    }
  }
}
