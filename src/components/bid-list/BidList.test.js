import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import BidList from "./BidList";

function setup(data) {
    const props = data || {
      merchant: {
        bids: [
          {
            id: 1,
            carTitle: "Jest",
            amount: 1000,
            created: '2018-10-10'
          },
          {
            id: 2,
            carTitle: "Jest",
            amount: 1000,
            created: '2018-10-10'
          }
        ]
      }
    };
    const mockStore = configureStore(),
        store = mockStore({
            app : {
              activeMerchant: props.merchant
            }
        });
    const BidListWrapper = shallow(
        <BidList store={store} {...props}/>
    );
    return {BidListWrapper, props, store};
}

describe('Bid List test suite', () => {
    it('should render Bid list', () => {
        const { BidListWrapper } = setup();
        expect(BidListWrapper.dive().find('table').length).toBe(1);
    });
    it('should render two list item', () => {
        const { BidListWrapper } = setup();
        expect(BidListWrapper.dive().find('tr').length).toBe(2);
    });
});