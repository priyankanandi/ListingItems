import React, { memo } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  selectedIndex,
  onClickHandler,
  text
}) => {
  return (
    <li
      className={classnames(
        "margin5 buttonClass cursor-pointer text-center color-white",
        isSelected && selectedIndex === index
          ? "bgcolor-green"
          : "bgColor-orangered"
      )}
      onClick={() => onClickHandler(index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  selectedIndex: PropTypes.number,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export const SingleListItem = memo(WrappedSingleListItem);
