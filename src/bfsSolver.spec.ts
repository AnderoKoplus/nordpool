import { solveBfs } from "./bfsSolver";

describe("solver", () => {
  it("should return [[0, 1, 0, 1, 0], 6] for basic test case n=1", () => {
    expect(solveBfs([1, 2, 3, 4, 5], 1)).toEqual([[0, 1, 0, 1, 0], 6]);
  });
  it("should return [[0, 0, 1, 0, 0], 3] for basic test case = 2", () => {
    expect(solveBfs([1, 2, 3, 4, 5], 2)).toEqual([[0, 0, 1, 0, 0], 3]);
  });
  it("should return [[0, 0, 1, 0, 0], 3] for basic test case = 3", () => {
    expect(solveBfs([1, 2, 3, 4, 5], 3)).toEqual([[0, 1, 0, 0, 0], 2]);
  });
  it("should return [[0, 1, 0, 0, 0], 4] for basic test case = 4", () => {
    expect(solveBfs([1, 2, 3, 4, 5], 4)).toEqual([[1, 0, 0, 0, 0], 1]);
  });
});
