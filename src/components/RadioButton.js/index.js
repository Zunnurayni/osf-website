import React from 'react';
import classNames from 'classnames';
import styles from './style.module.css';


function RadioButton({value, onChange,label,style, onBlur, name, children, className,checked, ...props}) {
    const _className = classNames(styles.oc_radiobutton_container,styles.oc_field,className);
    const _fieldClass = classNames(styles.oc_field_label,styles.oc_label, className)
    const _wrapper = classNames(styles.oc_wrapper, className)
    const _item = classNames(styles.oc_item, className)

   return (
        <div className={_wrapper}>
            <div className={_item}>
            <label className={_fieldClass}style={{...style}}>
            <input 
                className={_className}
                type="radio"
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                checked={checked}
                  {...props}
            />
            {children}
    </label>
        </div>
        </div>
        
    );
};
};


RadioButton.defaultProps = {
    disabled: false,
    className: '',
};



export default RadioButton;
