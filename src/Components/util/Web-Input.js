import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WebInput = ({
  type = 'text',
  value,
  onChange,
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
  );
};

WebInput.propTypes = {
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

export default WebInput;