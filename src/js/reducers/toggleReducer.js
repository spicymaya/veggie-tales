import { TOGGLE_MENU, TOGGLE_MODAL } from "../actions/toggleActions";

const initialState = {
  menuIsOpen: false,
  modalIsOpen: false
};

export default function toggleReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      // debugger;
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      };
    default:
      return state;
  }
}
