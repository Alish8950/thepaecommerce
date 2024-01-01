import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: false,
  sorting_value: "lowest"
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    dispatch({type: "SET_GRID_VIEW"});
  }
  const setListView = () => {
    dispatch({type: "SET_LIST_VIEW"});
  }
  const sorting = (selectValue) => {
    dispatch({type: "SORT_DROPDOWN_VALUE", payload: selectValue})
  }
  useEffect(() => {
    dispatch({ type: "FILTER_LOADING_DATA", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };
