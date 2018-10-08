import React from "react";
import { shallow } from "enzyme";

import BidCard from "./BidCard";

function setup(data) {
    const props = data || { data : {
      id: 1,
      carTitle: "Jest",
      amount: 1000,
      created: '2018-10-10'
    }};
    const cardWrapper = shallow(<BidCard {...props}/>);
    return {cardWrapper, props};
}

describe('Bids Card test suite', () => {
  it('should render component', () => {
    const {cardWrapper} = setup();
    expect(cardWrapper.find('tr').length).toBe(1);
  })

  it('should render details correctly', () => {
    const {cardWrapper} = setup();
    expect(cardWrapper.find('td').length).toBe(4);
  })

  it('first item should be bid id', () => {
    const {cardWrapper, props} = setup();
    expect(parseInt(cardWrapper.find('td:first-child').text(), 10)).toEqual(props.data.id);
  });
  it('last item should be created date', () => {
    const {cardWrapper, props} = setup();
    expect(cardWrapper.find('td:last-child').text()).toEqual(props.data.created);
  })
});