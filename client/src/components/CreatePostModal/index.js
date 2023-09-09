import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import FileBase64 from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPosts, hideModal } from '../../redux/actions'
import { modalState } from '../../redux/selectors'
import useStyle from './styles'

const CreatePostModal = () => {
    const [data, setData] = useState({
        title: '',
        content: '',
        attachment: ''
    });

    const dispatch = useDispatch()

    const onSubmit = useCallback(() => {
        console.log({ data });
        dispatch(createPosts.createPostsRequest(data))
    }, [data, dispatch]); //khi data thay đổi thì sẽ lấy theo giá trị mới nhất của data (đưa dispatch vào vì dispatch là dữ liệu bên ngoài nên cần đưa vào dependence)

    // const stateModal = useSelector(modalState)
    const { isShow } = useSelector(modalState)
    // console.log("stateModal", stateModal);
    // console.log('{isShow}', {isShow});

    const onClose = useCallback(() => {
        dispatch(hideModal())
        setData({
            title: '',
            content: '',
            attachment: ''
        })
    }, [dispatch])

    const classes = useStyle()

    const body = (
        <div className={classes.paper} id='simple-modal-title'>
            <h2>Bạn đang nghĩ gì?...</h2>
            <form noValidate autoComplete='off' className={classes.form}>
                <TextField
                    className={classes.title}
                    required
                    label="Tiêu đề"
                    value={data.title}
                    onChange={(e) => setData({ ...data, title: e.target.value })}
                />
                <TextareaAutosize
                    className={classes.textarea}
                    // rowsMin={10}
                    // rowsMax={15}
                    placeholder="Nội dung..."
                    value={data.content}
                    onChange={(e) => setData({ ...data, content: e.target.value })}
                />
                <FileBase64
                    accept="image/*" // chỉ nhận file ảnh
                    multiple={false} // chỉ nhận 1 file duy nhất
                    type="file"
                    value={data.attachment}
                    onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
                />
                <div className={classes.footer}>
                    <Button
                        variant='contained'
                        color='primary'
                        component='span'
                        fullWidth
                        onClick={onSubmit}
                    >Đăng</Button>
                </div>
            </form>
        </div>
    )

    return (
        <div>
            <Modal open={isShow} onClose={onClose}>
                {body}
            </Modal>
        </div>
    )
}

export default CreatePostModal