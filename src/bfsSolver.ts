type DfsState = {
  state: number[];
  pos: number;
  offCnt: number;
  price: number;
};
export function solveBfs(prices: number[], n: number) {
  let queue: DfsState[] = [
    {
      state: [],
      pos: -1,
      offCnt: 0,
      price: 0,
    },
  ];

  let minState: DfsState | undefined = undefined;
  while (queue.length > 0) {
    const state = queue.pop();
    if (state === undefined) continue;
    if (state.pos === prices.length - 1) {
      if (minState === undefined) {
        minState = state;
      }
      if (minState.price > state.price) {
        minState = state;
      }
      continue;
    }

    if (state.offCnt < n) {
      queue.push({
        pos: state.pos + 1,
        state: [...state.state, 0],
        offCnt: state.offCnt + 1,
        price: state.price,
      });
    }

    queue.push({
      pos: state.pos + 1,
      state: [...state.state, 1],
      offCnt: 0,
      price: state.price + prices[state.pos + 1],
    });
  }
  return [minState?.state, minState?.price];
}
