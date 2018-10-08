import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import App from "./App";

function setup(data) {
    const props = data || {};
    const mockStore = configureStore(),
        store = mockStore(props);
    const appWrapper = shallow(<App store={store}  {...props}/>);
    return {appWrapper, props, store};
}

describe('App test suite', () => {
    it('should render router', () => {
        const { appWrapper } = setup();
        expect(appWrapper.dive().find('Router').length).toBe(1);
    });
    it('should render 4 routes', () => {
        const { appWrapper } = setup({});
        expect(appWrapper.dive().find('Route').length).toBe(4);
    });
});