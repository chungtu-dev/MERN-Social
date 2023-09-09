import React from 'react'
import useStyle from './styles.js'
import {Typography} from '@material-ui/core'

const Header = () => {
    const classes = useStyle()
  return (
    <Typography variant='h4' align='center' className={classes.container}>
        Blog
    </Typography>
  )
}

export default Header