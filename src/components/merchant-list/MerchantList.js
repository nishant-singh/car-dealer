import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import MerchantCard from "../merchant-card/MerchantCard";
import './MerchantList.scss';

class MerchantList extends PureComponent {
  getMerchantList(){
    return this.props.merchants && this.props.merchants.map(merchant => {
      return <MerchantCard data={merchant} key={merchant.id}/>
    })
  }
  render() {
    const merchantList = this.getMerchantList();
    return (
      <table className="merchant-list">
        <thead>
          <tr>
            <th colSpan="2">MERCHANT</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>BIDS</th>
            <th>PREMIUM</th>
          </tr>
        </thead>
        <tbody>
            {merchantList}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = state => {
  return {
    merchants: state.app.merchants
  }
}

export default connect(mapStateToProps)(MerchantList);
