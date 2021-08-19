export const GRID_SIZE = 10
export const WIN_SIZE = 5
export const FIELD_LENGTH = 100

//every following function in computeWInLines is returning all winning combination - diagonally, horizontally, vertically, cross-diagonally
export const computeWinLines = () => {
  const winLines: number[][] = []

  const diagonal = () => {
    for (let x = 0; x <= WIN_SIZE; x++) {
      for (let y = 0; y <= WIN_SIZE; y++) {
        const sol: number[] = []
        for (let k = 0; k < WIN_SIZE; k++) {
          sol[k] = x + y * GRID_SIZE + k * GRID_SIZE + 1
        }
        winLines.push(sol)
      }
    }
  }

  const reservedDiagonal = () => {
    for (let x = 9; x >= 4; x--) {
      for (let y = 0; y <= WIN_SIZE; y++) {
        const sol: number[] = []
        for (let k = 0; k < WIN_SIZE; k++) {
          sol[k] = x + y * GRID_SIZE + k * 9
        }
        winLines.push(sol)
      }
    }
  }
  const horizontal = () => {
    for (let x = 0; x <= WIN_SIZE; x++) {
      for (let y = 0; y < GRID_SIZE; y++) {
        const sol: number[] = []
        for (let k = 0; k < WIN_SIZE; k++) {
          sol[k] = x + y * GRID_SIZE + k
        }
        winLines.push(sol)
      }
    }
  }
  const vertical = () => {
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let y = 0; y <= WIN_SIZE; y++) {
        const sol: number[] = []
        for (let k = 0; k < WIN_SIZE; k++) {
          sol[k] = x + y * GRID_SIZE + k * GRID_SIZE
        }
        winLines.push(sol)
      }
    }
  }
  diagonal()
  vertical()
  horizontal()
  reservedDiagonal()
  return winLines
}

export const calculateWinner = (squares: (null | 'X' | 'O')[], winLines: number[][]) => {
  for (let i = 0; i < winLines.length; i++) {
    //this fn is looping trough every button click over all winning solutions
    // a,b,c,d is returning individual numbers which is set to squares - (X,O) is saved for every winning possibility until one solution is filled with 5 values with same value (x or o), then returning winner
    const [a, b, c, d, e] = winLines[i]

    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[b] === squares[c] &&
      squares[c] === squares[d] &&
      squares[d] === squares[e]
    ) {
      return {
        // 'X' or 'O'
        side: squares[a],
        line: winLines[i],
      }
    }
  }
  return {
    side: null,
    line: [],
  }
}
