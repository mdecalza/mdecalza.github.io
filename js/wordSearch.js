/* Copyright 2024 Matthew DeCalzadilla */

/* canvas setup */
const canv = document.getElementById('word-search');
const cotx = canv.getContext('2d');

/* grid setup */
const TILE_W = 35;
const TILE_H = TILE_W;

const FONT_SIZE = 25;

const WORD_INSERT_TRY_LIMIT = 1000000;

/* insert words into grid */
function insertWords(words, grid, gridWidth, gridHeight, iter = 0) {
    if (iter >= WORD_INSERT_TRY_LIMIT) {
        return;
    }

    words.forEach((word) => {
        /* skip word if it has too many letters */
        if (word.length >= gridWidth || word.length >= gridHeight) {
            return;
        }

        /* choose the direction in X and Y for each word */
        directionX = -1 + Math.floor(Math.random() * 3);
        directionY = -1 + Math.floor(Math.random() * 3);
    
        /* choose a random starting position */
        gridIterX = Math.floor(Math.random() * (gridWidth - word.length));
        gridIterY = Math.floor(Math.random() * (gridHeight - word.length));

        /* mirror the starting position if the word is going backwards in either direction */
        if (directionX < 0) {
            gridIterX = (gridWidth-1) - gridIterX;
        }

        if (directionY < 0) {
            gridIterY = (gridHeight-1) - gridIterY;
        }

        wordIter = 0;
        while(wordIter < word.length) {
            letter = word.substring(wordIter, wordIter+1)
        
            gridIndex = gridIterY * gridWidth + gridIterX;

            if (grid[gridIndex].inWord() && grid[gridIndex].getLetter() !== letter) {
                while (wordIter > 0) {
                    wordIter--;
                    gridIterX -= directionX;
                    gridIterY -= directionY;
                    gridIndex = gridIterY * gridWidth + gridIterX;

                    grid[gridIndex] = new Tile(grid[gridIndex].getLetter(), gridIterX, gridIterY, false);
                }

                insertWords([word], grid, gridWidth, gridHeight, iter+1);
                break;
            }

            grid[gridIndex] = new Tile(letter, gridIterX, gridIterY, true);
            wordIter++;    

            gridIterX += directionX;
            gridIterY += directionY;

            if (gridIterX < 0 || gridIterY < 0) {
                break;
            }
            if (gridIterX >= gridWidth || gridIterY >= gridHeight) {
                break;
            }
        }

        console.log(word);
    });
}

/* generate word search algorithmically */
function generateWordSearch(words, gridWidth, gridHeight) {
    /* resize canvas */
    canv.width = gridWidth * TILE_W;
    canv.height = gridHeight * TILE_H;

    grid = [];

    gridSizeX = gridWidth;
    gridSizeY = gridHeight;

    gridIterX = 0;
    gridIterY = 0;

    while (gridIterY < gridSizeY) {
        while (gridIterX < gridSizeX) {
            code = 65 + Math.floor(Math.random() * 26);
            grid.push(
                new Tile(String.fromCharCode(code), gridIterX, gridIterY)
            );
            gridIterX++;
        }

        gridIterX = 0;
        gridIterY++;
    }

    insertWords(words, grid, gridWidth, gridHeight);

    return grid;
}

function drawWordSearch(grid, showWords) {
    cotx.font = FONT_SIZE.toString() + "px serif";
    grid.forEach((tile) => {
        tile.draw(showWords);
    });
}

class Tile {
    constructor(letter, x, y, isInWord = false) {
        this.letter = letter;
        this.x = x;
        this.y = y;
        this.isInWord = isInWord;
    }

    getLetter() {
        return this.letter;
    }

    inWord() {
        return this.isInWord;
    }

    draw(showWords = false) {
        const font = cotx.font;
        if (this.isInWord && showWords) {
            cotx.font = (FONT_SIZE - 10).toString() + "px serif"
        }

        cotx.fillText(this.letter,
            (this.x * TILE_W) + (TILE_W * .333),
            (this.y * TILE_H) + (TILE_H * .75)
        );

        cotx.font = font;
    }
}

var wordList = ['SWEENEYTODD', 'MRSLOVETT', 'JOHANNA', 'JUDGETURPIN', 'PIRELLI', 'BEADLE', 'ANTHONY'];

drawWordSearch(generateWordSearch(wordList, 15, 15), false);