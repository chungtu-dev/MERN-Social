import { INITIAL_STATE } from "../../constant";
import { getType, showModal, hideModal } from "../actions";

export default function postReducers(state = INITIAL_STATE.modal, action) {
    switch (action.type) {
        case getType(showModal):
            return {
                isShow: true,
            };
        case getType(hideModal):
            return{
                isShow: false,
            };
        default:
            return state
    }
}