import actions from "./constants";

export const getMerchantListAction = payload => ({
    type: actions.GET_MERCHANT_LIST,
    payload
});
export const getMerchantAction = payload => ({
    type: actions.GET_MERCHANT,
    payload
});
export const updateMerchantAction = payload => ({
    type: actions.UPDATE_MERCHANT,
    payload
});
export const saveMerchantAction = payload => ({
    type: actions.SAVE_MERCHANT,
    payload
});
export const deleteMerchantAction = payload => ({
    type: actions.DELETE_MERCHANT,
    payload
});
export const setActiveMerchantAction = payload => ({
    type: actions.SET_ACTIVE_MERCHANT,
    payload
});
export const getActiveMerchantAction = payload => ({
    type: actions.GET_ACTIVE_MERCHANT,
    payload
});
export const navigateAction = payload => ({
    type: actions.NAVIGATE,
    payload
});
export const resetHomeNavigationAction = payload => ({
    type: actions.RESET_NAVIGATE_HOME
});
