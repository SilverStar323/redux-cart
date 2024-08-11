export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch(type) {
    case "ADD_TO_CART":
      return payload;

    case "REMOVE_FROM_CART":
      return payload;

    default:
      throw new Error("No case Found in cartReducer");
  }
}