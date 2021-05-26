/**
 * pseudo code-
 * 1.loop through each row on the grid
 * 2.loop through each col on the grid
 * 	2.1 check if board[row][col] === word[0] && dfs(board, word, i , j, 0);
 * 		2.1.1 return true
 * 3. return false
 *
 * dfs(board, word, i , j, index) {
 *   // stop case
 *   1. check if index === word.length
 *   2. check if i, j are in bounds and word[index] === board[i][j]
 *   3. save the current char in board[i][j]
 *   3. mark board[i][j] = ' ' // we already visited in this place for this dfs iteration
 *   4. go through all the neighbors and perform dfs for them
 *   5. if one of the neighbors return true so the answer is true
 *   6. do backtracking and return the board[i][j] = char
 *   7. return according to #5 return true/false
 * }
 */
function searchWord(board, word) {
	for(let i = 0; i < board.length; i++) {
		for(let j = 0; j < board[i].length; j++) {
			// @ts-ignore
			if(board[i][j] === word[0] && dfs(board,word, i , j, 0)) {
				return true;
			}
		}
	}
	return false;
}
function dfs(board,word, i , j, index) {
	// base case - word found!
	if(index === word.length) {
		return true;
	}
	// check bounds and word condition
	if( i < 0 || j < 0 || i >= board.length || j >= board[i].length || word[index] !== board[i][j]) {
		return false;
	}
	let char = board[i][j];
	board[i][j] = ' ';

	// go through the neighbors
	let found = dfs(board, word, i +1 , j , index + 1) ||
		dfs(board, word, i - 1 , j , index + 1) ||
		dfs(board, word, i  , j + 1 , index + 1) ||
		dfs(board, word, i  , j - 1 , index + 1);

	board[i][j] = char;
	return found;
}