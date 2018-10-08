import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import './BidList.scss';
import BidCard from "../bid-card/BidCard";

class BidList extends PureComponent {
  getBidList(){
    if (this.props.merchant && this.props.merchant.bids)
      return this.props.merchant.bids.map(bid=>{
        return <BidCard data={bid} key={bid.id}/>
      });
    else 
      return <BidCard empty={true} />
  }
  render() {
    const bidList = this.getBidList();
    return (
      <table className="bid-list">
        <thead>
          {
            this.props.merchant ?
            <tr>
              <th colSpan={3} className="merchant">
                Showing bids for {this.props.merchant.firstname}
              </th>
              <th className="home-action">
                <Link className="btn-home" to="/">
                  Go to home
                </Link>
              </th>
            </tr>
            : ''
          }
          <tr>
            <th>#</th>
            <th>CAR</th>
            <th>AMOUNT</th>
            <th>CREATED</th>
          </tr>
        </thead>
        <tbody>
          {bidList}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    merchant: state.app.activeMerchant
  }
}

export default connect(mapStateToProps)(BidList);
