import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import EditMerchant from "./EditMerchant";

function setup(data) {
    const props = data || {
      activeMerchant: {},
      merchants: [],
      match: {
        params: {
          id: 1
        }
      }
    };
    const mockStore = configureStore(),
        store = mockStore({
          app: props
        });
    const editWrapper = shallow(<EditMerchant store={store}  {...props}/>);
    return {editWrapper, props, store};
}

describe('Edit Merchant test suite', () => {
    it('should render wrapper', () => {
        const { editWrapper } = setup();
        expect(editWrapper.dive().find('div').length).toBe(1);
    });
    it('should render Merchant Form', () => {
        const { editWrapper } = setup();
        expect(editWrapper.dive().find('withRouter(ReduxForm)').length).toBe(1);
    });
});