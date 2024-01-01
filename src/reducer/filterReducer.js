const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_LOADING_DATA":
      return {
        ...state,
        all_products: [...action.payload],
        filter_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
        list_view: false,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "SORT_DROPDOWN_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      // console.log(action.payload, "action.payload")
      return {
        ...state,
        sorting_value: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
