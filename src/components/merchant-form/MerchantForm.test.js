import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { MemoryRouter } from 'react-router-dom';

import MerchantForm from "./MerchantForm";

function setup(data) {
    const props = data || { 
        merchant: {}, 
        handleSubmit: jest.fn(),
        history: {
            push: jest.fn()
        }
    };
    const mockStore = configureStore(),
        store = mockStore({
            app : {activeMerchant: props.merchant}
        });
    const formWrapper = shallow(
            <MemoryRouter>
                <MerchantForm.WrappedComponent store={store}  {...props}/>
            </MemoryRouter>
        ).dive().dive();
    return {formWrapper, props, store};
}

describe('Merchant Form test suite', () => {
    it('should render 8 fields items', () => {
        const { formWrapper } = setup();
        expect(formWrapper.find('Field').length).toBe(8);
    });
    it('should render empty list', () => {
        const { formWrapper } = setup();
        expect(formWrapper.find('ul').length).toBe(0);
    });
    it('should not generate action upon page click', () => {
        const { formWrapper, store } = setup(),
            ul = formWrapper.find('[type="cancel"]');
        ul.simulate('click');
        expect(store.getActions()).toEqual([]);
    });
});