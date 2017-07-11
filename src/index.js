function checkWord(testBoard, word) {
  const getNeighbors = (i, j) => [
    [i-1,   j], [i+1, j],   [i,   j-1], // eslint-disable-line
    [i,   j+1],             [i-1, j-1], // eslint-disable-line
    [i-1, j+1], [i+1, j-1], [i+1, j+1]] // eslint-disable-line
  .filter((v) => {
    return (
      v[0] >= 0 &&
      v[1] >= 0 &&
      v[0] <= (testBoard.length - 1) &&
      v[1] <= (testBoard.length - 1)
    );
  });

  const findWord = (i, j, offset, visited) => {
    // if we have searched every character of word then it must exist on board
    if (offset === word.length) { return true; }
    // maintain a visited hash table so cells are not visited more than once
    visited[`(${i},${j})`] = true; // eslint-disable-line

    // get array of neighbors on board for current position
    const n = getNeighbors(i, j);
    let x, y; // eslint-disable-line
    for (let cell of n) { // eslint-disable-line
      [x, y] = cell;
      if (!visited[`(${x},${y})`] && testBoard[x][y] === word[offset]) {
        if (findWord(x, y, offset + 1, visited)) {
          return true;
        }
      }
    }
    return false;
  };

  for (let i = 0; i < testBoard.length; i += 1) {
    for (let j = 0; j < testBoard[i].length; j += 1) {
      if (testBoard[i][j] === word.charAt(0)) {
        if (findWord(i, j, 1, {})) {
          return true;
        }
      }
    }
  }
  return false;
}

export default checkWord;
