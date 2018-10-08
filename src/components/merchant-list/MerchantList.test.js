import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { MemoryRouter } from 'react-router-dom';

import MerchantList from "./MerchantList";

function setup(data) {
    const props = data || {
      merchants: [
        {
          "firstname": "Ahiravan",
          "lastname": "Pratap",
          "avatarUrl": "https://randomuser.me/api/portraits/men/21.jpg",
          "email": "ahir@hotmail.com",
          "phone": "+939911223344",
          "hasPremium": false,
          "id": 3
        }, {
          "firstname": "Gesa",
          "lastname": "Shaw",
          "avatarUrl": "https://randomuser.me/api/portraits/women/22.jpg",
          "email": "gesa@outlook.net",
          "phone": "+829911223344",
          "hasPremium": true,
          "id": 5
        },
      ]
    };
    const mockStore = configureStore(),
        store = mockStore({
            app : {merchants: props.merchants}
        });
    const merchantListWrapper = shallow(
      <MemoryRouter>
        <MerchantList.WrappedComponent store={store} {...props}/>
      </MemoryRouter>
    ).dive().dive();
    return {merchantListWrapper, props, store};
}

describe('Merchant List test suite', () => {
    it('should render merchant list', () => {
        const { merchantListWrapper } = setup();
        expect(merchantListWrapper.find('table').length).toBe(1);
    });
    it('should render 4 list headers', () => {
        const { merchantListWrapper } = setup();
        expect(merchantListWrapper.find('th').length).toBe(5);
    });
});