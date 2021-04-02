# ListingItems


List Component uses `memo` a react hooks feature to render then WrappedListComponent
Which basically list the item from the items and passes props like text, selected item and index to another function called SingleListItem
with memo WrappedSingleListItem to view the listed items as a list and on click of each list item, The selected item should be highlighted with green color.

Problem and warnings.  
1. Check item length before performing items.map function (need to check the length of a list).
2. Prototype.array() should be Prototype.arrayOf().
3.  Prototype.shapeOf() should be Prototype.shape(). shapeOf is not a function
4. setSelectedIndex should be setState function but in code setSelectedIndex is declared as variable.  change 
    1. const [setSelectedIndex, selectedIndex] = useState();  to 
    2. const [selectedIndex, setSelectedIndex] = useState(); this will fix the error.
5. A list should have a unique "key" while we use the map function for an array.
6. For isSelected value in the WrappedSingleListItem function check for both isSelected is equal to index of the clicked item than highlight the button with green color.
7. onClickHandler in WrappedSingleListItem was not returning the event index to parent component. 
