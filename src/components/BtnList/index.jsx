import React from 'react';
import PropTypes from 'prop-types';
import cnames from 'classnames';
import './style.css';

const BtnList = (props) => (
  <ul className="btn-list">
    {
      props.items.map(item => (
        <li
          className={cnames("btn-list__item", { "btn-list__item--active": props.value === item.value })}
          key={item.value}
        >
          <button
            onClick={() => props.onChange(item.value)}
            className="btn-list__btn"
          >
            {item.label}
          </button>
        </li>
      ))
    }
  </ul>
);

export default BtnList;

BtnList.propTypes = {
  value: PropTypes.any.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  })),
};
