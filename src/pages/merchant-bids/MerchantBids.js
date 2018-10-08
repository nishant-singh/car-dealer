import React, { Component } from 'react';
import {connect} from "react-redux";

import './MerchantBids.scss';
import BidList from "../../components/bid-list/BidList";
import { getActiveMerchantAction, setActiveMerchantAction } from "../../actions/merchant-action";

class MerchantBids extends Component {
  render() {
    return (
      <div className="merchant-bids">
        < BidList / >
      </div>
    );
  }
  componentDidMount(){
    const merchant = this.props.merchants && this.props.merchants.find((merchant) => {
      return merchant.id === parseInt(this.props.match.params.id, 10);
    });
    if(merchant)
      this.props.setActiveMerchant(merchant);
    else
      this.props.getActiveMerchant(this.props.match.params.id);
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    setActiveMerchant: (merchant) => { /*Check without curly*/
      dispatch(setActiveMerchantAction(merchant))
    },
    getActiveMerchant: (merchantId) => {
      dispatch(getActiveMerchantAction({
        id: merchantId
      }))
    }
  }
}
const mapStateToProps = state => {
  return {
    merchants: state.merchants
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantBids);
