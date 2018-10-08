import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import './Paginate.scss';
import { navigateAction } from "../../actions/merchant-action";

class Pagination extends PureComponent {
    navigateToPage(e){
        const page = parseInt(e.target.getAttribute('data-page'), 10);
        if(page > 0){
            this.props.navigate(page);
        }
    }
    render() {
        const pages = this.props.pagination && this.props.pagination.pages.map( page => {
            return <li key={page} data-page={page}>{page}</li>;
        });
        if(!this.props.pagination || this.props.pagination.totalPages <= 1)
            return null;
        return (
        <ul onClick={this.navigateToPage.bind(this)} className="pagination-container">
            <li data-page={1} className="start-page">{"<<"}</li>
            <li data-page={this.props.pagination.currentPage - 1} className="previous-page">{"<"}</li>
            {pages}
            <li data-page={this.props.pagination.currentPage + 1} className="next-page">{">"}</li>
            <li data-page={this.props.pagination.totalPages} className="last-page">{">>"}</li>
        </ul>
        );
    }
}
const mapStateToProps = state => {
    return {
        pagination: state.app.pagination
    };
}
const mapDispatchToProps = dispatch => {
    return {
        navigate: (pageNum) => {
            dispatch(navigateAction({pageNum}))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
