import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import actions from "../actions/constants";


const MerchantReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.SET_MERCHANT_LIST:
            return {
                ...state, merchants: action.payload
            };
        case actions.GET_MERCHANT:
            return {
                
            };
        case actions.MERCHANT_SAVED:
            return {
                ...state, 
                goToHome: true
            };
        case actions.MERCHANT_UPDATED:
            return {
                ...state, 
                goToHome: true
            };
        case actions.MERCHANT_DELETED:
            const merchants = state.merchants.filter(merchant => {
                return merchant.id !== action.payload
            });
            return {
                ...state, merchants,
                activeMerchant: false
            };
        case actions.SET_ACTIVE_MERCHANT:
            return {
                ...state, activeMerchant: action.payload
            };
        case actions.SET_PAGINATION:
            return {
                ...state,
                pagination: action.payload
            };
        case actions.RESET_NAVIGATE_HOME:
            delete state.activeMerchant;
            return {
                ...state,
                goToHome: false
            }
        default:
            return state;
    }
};

export default combineReducers({
    form: formReducer,
    app: MerchantReducer
});