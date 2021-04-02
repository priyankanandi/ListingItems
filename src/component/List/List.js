import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { SingleListItem } from "../SingleListItem/SingleListItem";

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState();

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const hasItems = Array.isArray(items) && items.length > 0;

  return (
    <>
      {hasItems && (
        <>
          Clicking on the item below will change the item background to green
          color
        </>
      )}
      <ul>
        {hasItems ? (
          items.map((item, index) => (
            <div key={index}>
              <SingleListItem
                onClickHandler={(index) => handleClick(index)}
                text={item.text}
                index={index}
                isSelected={selectedIndex}
              />
            </div>
          ))
        ) : (
          <>No Item Found</>
        )}
      </ul>
    </>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  )
};

WrappedListComponent.defaultProps = {
  items: null
};

const List = memo(WrappedListComponent);

export default List;
