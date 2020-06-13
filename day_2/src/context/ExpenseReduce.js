import { DELETE_EXPENSE, ADD_EXPENSE } from "./Actions";

export default (state, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        transactions: state.transactions.filter(
          (trans) => trans.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
