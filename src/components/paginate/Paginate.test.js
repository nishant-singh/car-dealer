import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import Pagination from "./Paginate";
import actions from "../../actions/constants";

function setup(data) {
    const props = data || { pagination: {
        currentPage: 1,
        totalPages: 10,
        hasPrev: true,
        firstPage: 1,
        hasNext: true,
        lastpage: 10,
        pages: [1,2,3]
    }};
    const mockStore = configureStore(),
        store = mockStore({
            app : {pagination: props.pagination}
        });
    const paginationWrapper = shallow(<Pagination store={store}  {...props}/>);
    return {paginationWrapper, props, store};
}

describe('Paginate Component test suite', () => {
    it('should render seven list items', () => {
        const { paginationWrapper } = setup(),
            ul = paginationWrapper.dive().find('ul');
        expect(ul.length).toBe(1);
        expect(ul.find('li').length).toBe(7);
    });
    it('should render empty list', () => {
        const { paginationWrapper } = setup({});
        expect(paginationWrapper.dive().find('ul').length).toBe(0);
    });
    it('should render correct page number', () => {
        const { paginationWrapper } = setup(),
            ul = paginationWrapper.dive().find('ul');
        expect(ul.find('li.start-page').getElement().props['data-page']).toEqual(1);
        expect(ul.find('li.previous-page').getElement().props['data-page']).toEqual(0);
        expect(ul.find('li.next-page').getElement().props['data-page']).toEqual(2);
        expect(ul.find('li.last-page').getElement().props['data-page']).toEqual(10);
    });

    it('should generate action upon page click', () => {
        const { paginationWrapper, store } = setup(),
            ul = paginationWrapper.dive().find('ul');
        ul.simulate('click',{
            target: {
                getAttribute: () => {return 2;}
            }
        });
        expect(store.getActions()).toEqual([
                {
                    payload: {
                        pageNum: 2
                    },
                    type: actions.NAVIGATE
                }]);
    });
    it('should generate action upon page click', () => {
        const { paginationWrapper, store } = setup(),
            ul = paginationWrapper.dive().find('ul');
        ul.simulate('click', {
            target: {
                getAttribute: () => {
                    return 0;
                }
            }
        });
        expect(store.getActions()).toEqual([]);
    });
});