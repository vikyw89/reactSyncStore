// a simple timeStore with 2 methods

let state = 0
let count = 5
const sync = () => {
  console.log('sync')
  state++
  count++
};

export const timeStore = {
  get state(){
    return state
  },
  sync,
  get count(){
    return count
  }
};
