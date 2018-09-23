import { connect } from 'react-redux'
import PageTemplate from '../components/PageTemplate'
import postActions from '../redux/actions/post'

const mapStateToProps = state => ({
  list: state.post.list,
})

const mapDispatchToProps = dispatch => ({
  fetchPostList: () => dispatch(postActions.fetchPostList()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTemplate)
