import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import AddMerchant from "./AddMerchant";

function setup(data) {
    const props = data || {};
    const mockStore = configureStore(),
        store = mockStore(props);
    const addWrapper = shallow(<AddMerchant store={store}  {...props}/>);
    return {addWrapper, props, store};
}

describe('Add Merchant test suite', () => {
    it('should render router', () => {
        const { addWrapper } = setup();
        expect(addWrapper.find('div.add-merchant').length).toBe(1);
    });
    it('should render Merchant Form', () => {
        const { addWrapper } = setup({});
        expect(addWrapper.shallow().find('withRouter(ReduxForm)').length).toBe(1);
    });
});