import React, { Component } from 'react';
import { connect } from 'react-redux';

import MerchantForm from "../../components/merchant-form/MerchantForm";
import { getActiveMerchantAction, setActiveMerchantAction } from "../../actions/merchant-action";
import './EditMerchant.scss';

class EditMerchant extends Component {
  render() {
    const merchantForm = this.props.merchant ? <MerchantForm mode="edit" merchant = {this.props.merchant}/>
        : false;
    return (
      <div className="edit-merchant">
        {merchantForm}
      </div>
    );
  }
  componentDidMount() {
    const merchant = this.props.merchants && this.props.merchants.find((merchant) => {
      return merchant.id === parseInt(this.props.match.params.id, 10);
    });
    if (merchant)
      this.props.setActiveMerchant(merchant);
    else
      this.props.getActiveMerchant(this.props.match.params.id);
  }
}

const mapStateToProps = state => {
  return {
    merchants: state.app.merchants,
    merchant: state.app.activeMerchant
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setActiveMerchant: (merchant) => {
      dispatch(setActiveMerchantAction(merchant))
    },
    getActiveMerchant: (merchantId) => {
      dispatch(getActiveMerchantAction({
        id: merchantId
      }))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditMerchant);
