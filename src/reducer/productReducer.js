

const productReducer = (state, action) => {
  switch (action.type) {
     case "SET_LOADING":
     return {
        ...state,
        isLoading: true,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "MY_API_DATA":
      const featureData = action.payload.filter((currElem) => {
        return currElem.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
        featureProducts: featureData,
      };

      case "SET_SINGLE_LOADING":
        return {
           ...state,
           isSingleLoading: true,
         };
   
       case "SINGLE_API_ERROR":
         return {
           ...state,
           isSingleLoading: false,
           isSingleError: true,
         };
   
       case "MY_SINGLE_API_DATA":
         return {
           ...state,
           isSingleLoading: false,
           isSingleError: false,
           singleProduct: action.payload
         };

    default:
      return state;
  }
};

export default productReducer;
