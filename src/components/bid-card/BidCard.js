import React from 'react';
import './BidCard.scss';

function BidCard (props) {
    if(props.empty)
      return (
        <tr className="bid-card">
          <td colSpan="4" className="no-bid sub-text">No bids found</td>
        </tr>
      );
    else
      return (
        <tr className="bid-card">
          <td className="sub-text">
            {props.data.id}
          </td>
          < td className = "main-text" >
            {props.data.carTitle}
          </td>
          <td className="sub-text">
            <i className="fas fa-euro-sign"></i>&nbsp;&nbsp;{props.data.amount}
          </td>
          <td className="sub-text">
            {props.data.created}
          </td>
        </tr>
      );
}

export default BidCard;
