import { solveBfs } from "./bfsSolver";

const data = [
  69.98, 62.68, 59.91, 60.03, 64.76, 80.43, 140.03, 143.07, 144.41, 160.01,
  130.0, 128.35, 128.34, 128.35, 138.21, 148.13, 159.49, 147.0, 139.98, 133.31,
  121.05, 103.89, 104.7, 94.63,
];
console.log(solveBfs(data, 1));
console.log(solveBfs(data, 2));
console.log(solveBfs(data, 3));
