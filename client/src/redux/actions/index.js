import { createActions, createAction } from 'redux-actions' //libary tạo actions

// createActions: tạo nhiều actions
// createAction: tạo 1 action

export const getType = (reduxAction) => {
    return reduxAction().type;
}

//nhận vào reduxAction
// ex: nhận vào getPosts.getPostsRequest thì getType sẽ trả về: getType(getPosts.getPostsRequest) => đang .type thì sẽ gọi đến type để lấy ra tên action


//gọi site effect call api
export const getPosts = createActions({
    getPostsRequest: undefined, //ko có bất kì request nào nên để undefined         (gửi request)
    getPostSuccess:(payload) => payload, //lấy post thành công                      (lấy data thành công)
    getPostFailure:(err) => err, // lấy post thất bại từ phía API                   (trường hợp lấy data nhưng có lỗi từ API)
});

//từng action trong createActions là 1 function
// ex: => getPostsRequest:
// có dạng 
// {
//     type: 'getPostsRequest'
// }
// -----------------
// ex => getPostSuccess:
// có dạng
// {
//     type:'getPostSuccess',
//     payload: {
//         name: 'exam...',
//     }
// }

export const createPosts = createActions({
    createPostsRequest: (payload) => payload, //gửi data lên server
    createPostSuccess:(payload) => payload,
    createPostFailure:(err) => err,
});

export const updatedPosts = createActions({
    updatedPostsRequest: (payload) => payload,
    updatedPostSuccess:(payload) => payload,
    updatedPostFailure:(err) => err,
});

export const deletePosts = createActions({
    deletePostsRequest: (payload) => payload,
    // deletePostsRequest: undefined,
    deletePostSuccess:(payload) => payload,
    deletePostFailure:(err) => err,
});

export const showModal = createAction("SHOW_CREATE_POST_MODAL")
export const hideModal = createAction("HIDE_CREATE_POST_MODAL")