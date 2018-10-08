import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import './MerchantCard.scss';
import { deleteMerchantAction } from "../../actions/merchant-action";

class MerchantCard extends PureComponent {
  editMerchant(){
    this.props.history.push(`/edit_merchant/${this.props.data.id}`);
  }
  deleteMerchant(){
    this.props.deleteMerchant(this.props.data.id);
  }
  render(){
    const premiumIcon = this.props.data.hasPremium ? <i className="fas fa-check"></i> : null;
    return (
      <tr className="merchant-card">
        <td className="image-container">
          <img src={this.props.data.avatarUrl} alt={this.props.data.firstname} />
        </td>
        < td className = "main-text" >
          {this.props.data.firstname} {this.props.data.lastname} 
        </td>
        <td className="sub-text">
          <i className="fas fa-envelope"></i>&nbsp;&nbsp;{this.props.data.email}
        </td>
        <td className="sub-text">
          <i className="fas fa-mobile-alt"></i>&nbsp;&nbsp;{this.props.data.phone}
        </td>
        <td className="sub-text">
          {this.props.data.bids ? <Link to={`/bids/${this.props.data.id}`}>{this.props.data.bids.length}</Link> : 0}
        </td>
        <td className="sub-text text-center premium">
          {premiumIcon}
        </td>
        <td className="sub-text text-center actions">
          <i className="fas fa-edit" onClick={this.editMerchant.bind(this)}></i>&nbsp;&nbsp;
          <i className="fas fa-trash-alt" onClick={this.deleteMerchant.bind(this)}></i>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return{
    deleteMerchant: id => {
      dispatch(deleteMerchantAction(id));
    }
  }
}
export default withRouter(connect(null, mapDispatchToProps)(MerchantCard));
