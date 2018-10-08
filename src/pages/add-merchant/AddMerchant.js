import React, { Component } from 'react';

import MerchantForm from "../../components/merchant-form/MerchantForm";
import './AddMerchant.scss';

class AddMerchant extends Component {
  render() {
    return (
      <div className="add-merchant">
        <MerchantForm mode="add"/>
      </div>
    );
  }
}

export default AddMerchant;
