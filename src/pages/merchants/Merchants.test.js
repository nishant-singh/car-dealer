import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import Merchants from "./Merchants";

function setup(data) {
    const props = data ||{};
    const mockStore = configureStore(),
        store = mockStore(props);
    const merchantsWrapper = shallow(<Merchants store={store}  {...props}/>);
    return {merchantsWrapper, props, store};
}

describe('Merchants List Page test suite', () => {
    it('should render merchant lists', () => {
        const { merchantsWrapper } = setup();
        expect(merchantsWrapper.dive().find('div').length).toBe(1);
    });
    it('should render Merchant Bid list', () => {
        const { merchantsWrapper } = setup();
        expect(merchantsWrapper.dive().find('Connect(MerchantList)').length).toBe(1);
    });
    it('should render pagination', () => {
        const { merchantsWrapper } = setup();
        expect(merchantsWrapper.dive().find('Connect(Pagination)').length).toBe(1);
    });
});