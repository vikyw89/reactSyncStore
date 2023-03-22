import { emitChange, useSyncEmitChange } from "../hooks/useSync";

// a simple countStore with 2 methods

const state = {
  count: 0,
};

const increment = () => {
  state.count = state.count + 1;
};

const decrement = () => {
  state.count = state.count - 1
};

export const counterStore = {
    state,
    increment,
    decrement
}