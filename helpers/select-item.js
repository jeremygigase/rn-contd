import { useSelector, useDispatch } from "react-redux";

const filterItemHandler = (items, id) => {
  const selectedItem = items.filter((item) => item.id === id);
  return selectedItem;
};

const filterIds = (items, ids) => {
  items.filter((item) => {
    return ids.includes(item.sceneId);
  });
};

export { filterItemHandler, filterIds };
