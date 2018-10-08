export default {
    initialize: function (params) {
        const initData = {
          "firstname": this.props.merchant.firstname,
          "lastname": this.props.merchant.lastname,
          "avatarUrl": this.props.merchant.avatarUrl,
          "email": this.props.merchant.email,
          "phone": this.props.merchant.phone,
          "hasPremium": this.props.merchant.hasPremium
        };

        this.props.initialize(initData);
    },
    validate: {
        email : value => value 
                    && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
                    'Invalid email address' : undefined,
        required : value => value ? 
                    undefined : 'Required',
        maxLength15 : value => value && value.length > 15 ? 
                    `Must be 15 digits or less` : undefined,
        minLength10 : value => value && value < 10 ? 
                    `Must be at least 10 digits` : undefined
    },
    onSubmit: function(values){
        if(this.props.mode === 'edit'){
            values.id = this.props.merchant.id;
            this.props.updateMerchant(values);
        }
        else
            this.props.saveMerchant(values);
    },
    onCancel: function(){
        this.props.history.push('/');
    }
};