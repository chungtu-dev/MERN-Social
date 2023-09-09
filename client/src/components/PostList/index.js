import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import { postsState } from '../../redux/selectors'

const PostList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest())
    }, [dispatch]) //vì useEffect đang dùng dispatch nên cho dispatch vào arr depentdence để khi có sự thay đổi từ dispatch thì sẽ chạy lại useEffect

    // useSelector -> lấy ra selector tương ứng
    const posts = useSelector(postsState)
    return (
        <Grid container spacing={2} alignItems='stretch'>
            {
                posts.map((post) => (
                    <Grid item xs={12} sm={6} >
                        <Post post={post} key={post._id} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default PostList