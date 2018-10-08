import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import MerchantBids from "./MerchantBids";

function setup(data) {
    const props = data || {
      merchants: [],
      match: {
        params: {
          id: 1
        }
      }
    };
    const mockStore = configureStore(),
        store = mockStore(props);
    const bidsWrapper = shallow(<MerchantBids store={store}  {...props}/>);
    return {bidsWrapper, props, store};
}

describe('Merchant bids test suite', () => {
    it('should render merchant bids', () => {
        const { bidsWrapper } = setup();
        expect(bidsWrapper.dive().find('div').length).toBe(1);
    });
    it('should render Merchant Bid list', () => {
        const { bidsWrapper } = setup();
        expect(bidsWrapper.dive().find('Connect(BidList)').length).toBe(1);
    });
});