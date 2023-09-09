import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'

export async function getData() {
    return new Promise((resolve, reject) => {
        api.fetchPosts()
            .then((response) => {
                console.log('response', response);
                resolve()
                return response
            })
            .catch(() => {
                reject()
            })
    })
}

function* fetchPostSaga(action) {
    try {
        const posts = yield call(api.fetchPosts)
        console.log('posts from api', posts);  //return array data

        //đây là 1 trigger action
        const a = yield put(actions.getPosts.getPostSuccess(posts)) //sau khi getPostsRequest thành công thì sẽ trả data vào cho getPostSuccess để cập nhật lại store
        console.log('a', a.payload);
        getData()
    } catch (error) {
        console.log(error);
        yield put(actions.getPosts.getPostFailure(error))
    }
}

function* createPostSaga(action) {
    try {
        const post = yield call(api.createPost, action.payload)
        // console.log('post created', post);
        yield put(actions.createPosts.createPostSuccess(post.data))
    } catch (error) {
        console.log(error);
        yield put(actions.createPosts.createPostFailure(error))
    }
}

function* updatedPostSaga(action) {
    try {
        const postUpdated = yield call(api.updatedPost, action.payload)
        console.log('post updated', postUpdated);
        yield put(actions.updatedPosts.updatedPostsRequest(postUpdated.data))
    } catch (error) {
        console.log(error);
        yield put(actions.updatedPosts.updatedPostFailure(error))
    }
}

function* deletedPostSaga(action) {
    try {
        const deletedPost = yield call(api.deletedPost, action.payload)
        console.log('post delete id', deletedPost);
        yield put(actions.deletePosts.deletePostsRequest(deletedPost.data))
    } catch (error) {
        console.log(error);
        yield put(actions.deletePosts.deletePostsRequest(error))
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga)
    yield takeLatest(actions.createPosts.createPostsRequest, createPostSaga)
    yield takeLatest(actions.updatedPosts.updatedPostsRequest, updatedPostSaga)
    yield takeLatest(actions.deletePosts.deletePostsRequest, deletedPostSaga)
}
export default mySaga;

//tìm hiểu thêm: generator function ES6
// => cũng tương đối giống như async await

//takeLatest: nếu có nhiều action cùng lúc resq thì sẽ xử lý action cuối cùng, nếu các actions trước chưa hoàn tất thì cancel hết

// takeLatest:
//     tham số 1: nhận vào 1 string tên func hoặc 1 func
//     tham số 2: function xử lý khi có action xảy ra

//call (redux-saga) -> thực thi func thì gọi effect call

// extra note:
// yeild là từ khóa dùng để tạm dừng và cũng để tiếp tục việc thực thi bên trong generator function