import React from 'react';

export default {
    inputBox: field =>{
        return(
            <span className={field.class}>
                <input type={field.type} placeholder={field.label} {...field.input} 
                    className={field.meta.touched && field.meta.error && 'input-error'}
                />
                {
                    field.meta.touched && 
                    ((field.meta.error && <span className="error">{field.meta.error}</span>) 
                    || (field.meta.warning && <span className="error warning">{field.meta.warning}</span>))
                }
            </span>
        );
    },
    button: field => {
        return(
            <button type={field.type} onClick={field.onClick} {...field.button} disabled={field.disabled}>
                {field.label}
            </button>
        );
    }
}