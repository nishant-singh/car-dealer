import React from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from 'react-router-dom';

import MerchantCard from "./MerchantCard";

function setup(data) {
    const props = data || {
      data: {
        "firstname": "Car",
        "lastname": "24",
        "avatarUrl": "https://randomuser.me/api/portraits/men/40.jpg",
        "email": "contact@car24.com",
        "phone": "7766554433",
        "hasPremium": false,
        "id": 1,
        "bids": [{
            "id": 1,
            "carTitle": "Jest",
            "amount": 1000,
            "created": "2018-09-10 01:00 PM"
          },
          {
            "id": 2,
            "carTitle": "Mercedes",
            "amount": 3500,
            "created": "2018-09-20 05:00 PM"
          },
          {
            "id": 3,
            "carTitle": "Porsche",
            "amount": 4000,
            "created": "2018-09-28 10:00 AM"
          }
        ]
      },
      history: {
        push: jest.fn()
      },
      deleteMerchant: jest.fn()
    };
    const cardWrapper = shallow(
        <MemoryRouter>
          <MerchantCard.WrappedComponent {...props}/>
        </MemoryRouter>
      ).dive().dive();
    return {cardWrapper, props};
}

describe('Merchant Card test suite', () => {
  it('should render component', () => {
    const {cardWrapper} = setup();
    expect(cardWrapper.find('tr').length).toBe(1);
  })

  it('should render details correctly', () => {
    const {cardWrapper} = setup();
    expect(cardWrapper.find('img').length).toBe(1);
    expect(cardWrapper.find('td').length).toBe(7);
  })
  it('first item should be combined name', () => {
    const {cardWrapper, props} = setup();
    expect(cardWrapper.find('td.main-text').text())
    .toEqual(`${props.data.firstname} ${props.data.lastname}`);
  })

  it('should call history push function', () => {
    const {cardWrapper, props} = setup();
    cardWrapper.find('.fa-edit').simulate('click');
    expect(props.history.push).toBeCalled();
  })

  it('should call delete merchant function', () => {
    const {cardWrapper, props} = setup();
    cardWrapper.find('.fa-trash-alt').simulate('click');
    expect(props.deleteMerchant).toBeCalled();
  })
});