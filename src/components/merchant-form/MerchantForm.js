import React, { Component } from 'react';
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

import './MerchantForm.scss';
import formElements from "./FormElements";
import formActions from "./FormActions";
import { saveMerchantAction, updateMerchantAction } from "../../actions/merchant-action";

class MerchantForm extends Component {
  componentDidMount(){
    if(this.props.mode === "edit" && this.props.merchant)
      formActions.initialize.call(this);
  }
  componentDidUpdate() {
    if (this.props.goToHome){
      this.props.history.push('/');
    }
  }
  render() {
    const { handleSubmit, submitting } = this.props,
          validator = formActions.validate;
    return (
      <div className="merchant-form">
        <h1>{this.props.mode === 'edit'? 'EDIT' : 'ADD'} MERCHANT</h1>
        <form onSubmit={ handleSubmit(formActions.onSubmit.bind(this)) } className="form">
          <div className="row name">
            <i className="fas fa-user-tie"></i>
            <Field
              name="firstname" label="First Name" type="text"
              component = {formElements.inputBox} class="name-box"
              validate={[validator.required]}
            />
            <Field
              name="lastname" label="Last Name" type="text"
              component = {formElements.inputBox}
            />
          </div>
          <div className="row">
            <i className="fas fa-image"></i>
            <Field
              name="avatarUrl" label="Avatar URL" type="text"
              component = {formElements.inputBox}
              validate={[validator.required]}
            />
          </div>
          <div className="row">
            <i className="fas fa-envelope"></i>
            <Field
              name="email" label="Email" type="email"
              component = {formElements.inputBox}
              validate={[validator.required, validator.email]}
            />
          </div>
          <div className="row">
            <i className="fas fa-phone"></i>
            <Field
              name="phone" label="Phone" type="text"
              component = {formElements.inputBox}
              validate={[validator.minLength10, validator.maxLength15]}
            />
          </div>
          <div className="row checkbox">
            <Field
              name="hasPremium" label="Has premium" type="checkbox"
              component = {formElements.inputBox}
            />
            is Premium
          </div>
          <div className="row">
            <Field
              name="save" label="Save" type="submit" disabled={submitting}
              component = {formElements.button}
            />
          </div>
          <div className="row">
            <Field
              name="cancel" label="Cancel" type="cancel" onClick = {formActions.onCancel.bind(this)}
              component = {formElements.button}
            />
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    merchant: state.app.activeMerchant,
    goToHome: state.app.goToHome
  }
};
const mapDispatchToProps = dispatch => {
  return{
    saveMerchant: (merchant) => {
      dispatch(saveMerchantAction(merchant))
    },
    updateMerchant: (merchant) => {
      dispatch(updateMerchantAction(merchant))
    }
  }
};
export default withRouter(
  reduxForm({
    form: 'Merchant Form'
  })(
    connect(mapStateToProps, mapDispatchToProps)(MerchantForm)
  )
);
