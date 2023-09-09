import React, { useCallback } from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'
import RemoveCircle from '@material-ui/icons/RemoveCircleOutline'
import moment from 'moment'
import useStyle from './styles'
import { useDispatch } from 'react-redux'
import { updatedPosts, deletePosts } from '../../../redux/actions'

const Post = ({ post }) => {

    const dispatch = useDispatch()

    const classes = useStyle()

    const onLikeButtonClick = useCallback(() => {
        dispatch(updatedPosts.updatedPostsRequest({ ...post, likeCount: post.likeCount + 1 }))
    }, [dispatch, post]);

    const handleDeletePost = useCallback(() => {
        dispatch(deletePosts.deletePostsRequest())
    },[dispatch])

    return (
        <Card>
            <CardHeader
                avatar={<Avatar>A</Avatar>}
                title={post.author}
                subheader={moment(post.updatedAt).format('HH:MM MMM DD,YYYY')}
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <CardMedia image={post.attachment} title="Title" className={classes.media} />
            <CardContent>
                <Typography variant="h5" color="tetxPrimary">{post.title}</Typography>
                <Typography variant="body2" component='p' color='textSecondary'>{post.content}</Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={onLikeButtonClick}>
                    <FavoriteIcon />
                    <Typography component="span" color="textSecondary">{post.likeCount}</Typography>
                </IconButton>
                
                <IconButton onClick={handleDeletePost}>
                <RemoveCircle/>
                    <Typography component="span" color="textSecondary">remove</Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post