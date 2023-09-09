import React, { useCallback } from 'react'
import {Container, Fab} from '@material-ui/core'
import Header from '../components/Header'
import PostList from '../components/PostList'
import AddIcon from '@material-ui/icons/Add'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { showModal } from '../redux/actions'
import CreatePostModal from '../components/CreatePostModal'

const HomePage = () => {

    const dispatch = useDispatch()
    const classes = useStyles()

    const openModalAction = useCallback(()=>{
      dispatch(showModal())
    },[dispatch])

  return (
    <Container maxWidth='lg'>
        <Header/>
        <PostList/>
        <CreatePostModal/>
        <Fab color='primary' className={classes.fab} onClick={openModalAction}>
            <AddIcon/>
        </Fab>
    </Container>
  )
}

export default HomePage