/**
 *
 * @param grid
 * @param row
 * @param col
 O(2 ^ (n^2))
 */
countPaths([],0,0);
// @ts-ignore
function countPaths(grid: boolean[][], row: number, col: number) {
	if(!validMove(grid, row, col)) return 0;
	if(isAtEnd(grid, row, col)) return 1;
	return countPaths(grid, row + 1, col) + countPaths(grid, row , col + 1);
}

// @ts-ignore
function validMove(grid, row, col): boolean {
	return row >= 0 && row < grid.length && col >= 0 && col <= grid[0].length;
}
// @ts-ignore
function isAtEnd(grid, row, col):boolean {
	return row === grid.length -1 && col === grid[0].length -1;
}