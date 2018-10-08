import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMerchantListAction, resetHomeNavigationAction } from "../../actions/merchant-action";
import MerchantList from "../../components/merchant-list/MerchantList";
import Pagination from "../../components/paginate/Paginate";
import './Merchants.scss';

class Merchants extends Component {
  componentDidMount(){
    this.props.getMerchantList();
    this.props.resetHomeNavigation();
  }
  render() {
    return (
      <div className="merchant-list-page">
        <Link className="btn-add" to="/add_merchant">
          Add Merchant
        </Link>
        <MerchantList />
        <Pagination />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMerchantList: () => {
      dispatch(getMerchantListAction({}))
    },
    resetHomeNavigation: () => {
      dispatch(resetHomeNavigationAction());
    }
  }
}

export default connect(null, mapDispatchToProps)(Merchants);
