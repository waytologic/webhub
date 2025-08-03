import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './css/Web-Input.css';

const IconInput = ({
  type = 'text',
  value,
  label,
  icon,
  onChange,
  title,
  placeholder,
  pattern,
  required,
  minLength,
  maxLength,
  className,
  style,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className='inputWithIcon'>   
    <input
      type={type}
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
      pattern={pattern}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      className={className}
      style={style}
      {...rest} // Spread any other props
    />
    {icon && <i className={icon} aria-hidden="true"></i>}
     
     </div>
  );
};

IconInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default IconInput;