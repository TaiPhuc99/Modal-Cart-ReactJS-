import { dataPhones } from "../DataList";
import {
  DETAIL,
  ADD_TO_CART,
  CHANGE_QUANTITY,
} from "../Reducer/Constants/const";

// Initalize State
const initialState = {
  dataPhones: dataPhones,
  detailPhone: dataPhones[0],
  cart: [],
};

export const itemReducer = (
  state = initialState,
  { type, payload, payloadID, value }
) => {
  switch (type) {
    case DETAIL: {
      state.detailPhone = payload;
      return { ...state };
    }

    case ADD_TO_CART: {
      let cartClone = [...state.cart];
      const index = state.cart.findIndex((item) => {
        return item.maSP === payload.maSP;
      });

      if (index === -1) {
        const newPayload = { ...payload, quantity: 1 };
        cartClone.push(newPayload);
      } else {
        cartClone[index].quantity++;
      }

      state.cart = cartClone;
      return { ...state };
    }

    case CHANGE_QUANTITY: {
      const index = state.cart.findIndex((item) => {
        return item.maSP === payloadID;
      });

      let cartClone = [...state.cart];
      if (index !== -1) {
        cartClone[index].quantity += value;
        cartClone[index].quantity === 0 && cartClone.splice(index, 1);
      }

      state.cart = cartClone;
      return { ...state };
    }

    default:
      return state;
  }
};
