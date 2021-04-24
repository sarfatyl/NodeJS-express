/**
 *
 * @param grid
 * @param row
 * @param col
 *  O(n^2)
 */
countPaths([],0,0);
// @ts-ignore
function countPaths(grid: boolean[][], row: number, col: number) {
	if(!validMove(grid, row, col)) return 0;
	if(isAtEnd(grid, row, col)) return 1;
	return countPaths(grid, row + 1, col) + countPaths(grid, row , col + 1);
}
function countPaths(grid: boolean[][], row: number, col: number, paths: number[][]) {
	if(!validMove(grid, row, col)) return 0;
	if(isAtEnd(grid, row, col)) return 1;
	if(!paths[row][col]) {
		paths[row][col] = countPaths(grid, row + 1, col) + countPaths(grid, row , col + 1);
	}
	return paths[row][col];
}
function validMove(grid, row, col): boolean {
	return row >= 0 && row < grid.length && col >= 0 && col <= grid[0].length;
}
function isAtEnd(grid, row, col):boolean {
	return row === grid.length -1 && col === grid[0].length -1;
}