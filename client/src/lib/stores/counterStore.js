
// a simple countStore with 2 methods

const state = {
  count: 0,
};

const increment = () => {
  state.count++
};

const decrement = () => {
  state.count--
};

export const counterStore = {
    state,
    increment,
    decrement
}