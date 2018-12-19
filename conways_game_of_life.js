// Good morning ladies and gents, do we have a treat for you today.
// For our bonus round morning challenge, I present to you, Conway's Game of Life!
// The rules are simple. You are presented with 2d array, containing 1's and 0's.
// 1's represent live cells, 0's represent dead cells.
// Your task is to find what the next generation of the 2d array looks like based on the following rules:
//     If a living cell has fewer than 2 neighbours, it dies.
//     If a living cell has 2 or 3 neighbours, it continues to live.
//     If a living cell has greater than 3 neighbours, it dies.
//     If a dead cell has exactly 3 neighbours, it comes to life.
// Good luck and have fun!

function conwaysGameOfLife(cells) {
    
    var result = [];
    /**
     * Return amount of alive neighbours for a cell
     */
    function _countNeighbours(x, y) {
        var amount = 0;
        
        function _isFilled(x, y) {
            return cells[x] && cells[x][y];
        }
        
        if (_isFilled(x-1, y-1)) amount++;
        if (_isFilled(x,   y-1)) amount++;
        if (_isFilled(x+1, y-1)) amount++;
        if (_isFilled(x-1, y  )) amount++;
        if (_isFilled(x+1, y  )) amount++;
        if (_isFilled(x-1, y+1)) amount++;
        if (_isFilled(x,   y+1)) amount++;
        if (_isFilled(x+1, y+1)) amount++;
        
        return amount;
    }
    
    cells.forEach(function(row, x) {
        result[x] = [];
        row.forEach(function(cell, y) {
            var alive = 0,
                count = _countNeighbours(x, y);

            if (cell) {  //if cell is alive
                alive = count === 2 || count === 3 ? 1 : 0;
            } else {
                alive = count === 3 ? 1 : 0;
            }
            
            result[x][y] = alive;
        });
    });
    
    return result
    
}

// function conwaysGameOfLife(twoDarray) {
//     let newtwoDarray = [...Array(twoDarray.length)].map(e => Array(twoDarray[0].length));
//     for (let i = 0; i < twoDarray.length; i++) {
//         for (let j = 0; j < twoDarray[i].length; j++) {
//             let neighbours = 0
//             if (twoDarray[i - 1]) {
//                 if (twoDarray[i - 1][j]) neighbours++
//             }
//             if (i + 1 < 5) {
//                 if (twoDarray[i + 1][j]) neighbours++
//             }
//             if (j - 1 >= 0) {
//                 if (twoDarray[i][j - 1]) neighbours++
//             }
//             if (j + 1 < 5) {
//                 if (twoDarray[i][j + 1]) neighbours++
//             }
//             if (i - 1 >= 0 && j - 1 >= 0) {
//                 if (twoDarray[i - 1][j - 1]) neighbours++
//             }
//             if (i - 1 >= 0 && j + 1 < 5) {
//                 if (twoDarray[i - 1][j + 1]) neighbours++
//             }
//             if (i + 1 < 5 && j - 1 >= 0) {
//                 if (twoDarray[i + 1][j - 1]) neighbours++
//             }
//             if (i + 1 < 5 && j + 1 < 5) {
//                 if (twoDarray[i + 1][j + 1]) neighbours++
//             }

//             if (twoDarray[i][j] && (neighbours < 2 || neighbours > 3)) {
//                 newtwoDarray[i][j] = 0
//             } else if (twoDarray[i][j] === 0 && neighbours === 3) {
//                 newtwoDarray[i][j] = 1
//             } else {
//                 newtwoDarray[i][j] = twoDarray[i][j]
//             }
//         }
//     }
//     return newtwoDarray

// }

function* nthGen(int, game) {
    yield conwaysGameOfLife(game)
}

let assert = require('assert')

describe("Conway's Game Of Life", function () {
    context("Testing One Generation", function () {
        it("Should correctly return the next generation of the game", function () {
            let game = [
                [0, 0, 0, 0, 0],
                [0, 0, 1, 1, 0],
                [0, 1, 1, 0, 0],
                [0, 0, 1, 0, 1],
                [0, 0, 1, 0, 0]
            ]
            assert.deepEqual(conwaysGameOfLife(game), [
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0]
            ])
        })
    })
    context("BEAST MODE!!!! Testing n generations", function () {
        let game = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1],
            [0, 0, 1, 0, 0]
        ]
        let answers = [
            [
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0]
            ],
            [
                [0, 0, 1, 0, 0],
                [0, 1, 1, 0, 0],
                [0, 1, 0, 1, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0]
            ],
            [
                [0, 1, 1, 0, 0],
                [0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0]
            ],
            [
                [0, 1, 1, 0, 0],
                [1, 1, 0, 1, 0],
                [0, 1, 0, 1, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0]
            ],
            [
                [1, 1, 1, 0, 0],
                [1, 0, 0, 1, 0],
                [1, 1, 0, 1, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0]
            ]

        ]
        let n = 0
        for (let gen of nthGen(5, game)) {
            it("Should correctly return the next generation of the game", function () {
                assert.deepEqual(gen, answers[n])
                n += 1
            })
        }
    })
})