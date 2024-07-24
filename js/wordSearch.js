/* Copyright 2024 Matthew DeCalzadilla */

/* canvas setup */
const canv = document.getElementById('word-search');
const cotx = canv.getContext('2d');

/* grid setup */
var TILE_W = 0;
var TILE_H = 0;
var FONT_SIZE = 0;
var gridWidth = 15;
var gridHeight = 15;
resizeCanvas();
resizeTiles();

const WORD_INSERT_TRY_LIMIT = 1000000;

const defaultWordList1 = ['Sweeney', 'Lovett', 'Johanna', 'Turpin', 'Pirelli', 'Beadle', 'Anthony'];
const defaultWordList2 = [' robin ', 'sparrow  ', 'parrot', 'hummingbird', 'eagle', 'hawk'];
const defaultWordList3 = ['Hulk', 'Spider-Man', 'Deadpool', 'Iron Man', 'Cap America', 'Peter Quill'];
const defaultWordList4 = ['Hawk', 'Mullen', 'Caballero', 'Huston', 'Palmer', 'Horigome', 'Bufoni', 'Song', 'Margera'];
const defaultWordList5 = ['Walt', 'Jesse', 'Tuco', 'Gus', 'Mike', 'Hank', 'Badger', 'Skinny Pete', 'Combo'];

const choice = Math.floor(Math.random() * 5);
var wordList = [defaultWordList1, defaultWordList2, defaultWordList3, defaultWordList4, defaultWordList5][choice];
filterWordList(wordList);

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
            cotx.font = (FONT_SIZE - 10).toString() + "px sans-serif"
        }

        cotx.fillText(this.letter,
            (this.x * TILE_W) + (TILE_W * .5),
            (this.y * TILE_H) + (TILE_H * .85)
        );

        cotx.font = font;
    }
}

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
        const directionX = -1 + Math.floor(Math.random() * 3);
        const directionY = -1 + Math.floor(Math.random() * 3);
    
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

        let wordIter = 0;
        while(wordIter < word.length) {
            const letter = word.substring(wordIter, wordIter+1)
        
            let gridIndex = gridIterY * gridWidth + gridIterX;

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

            gridIterX += directionX;
            gridIterY += directionY;

            wordIter++;    

            if (gridIterX < 0 || gridIterY < 0) {
                break;
            }
            if (gridIterX >= gridWidth || gridIterY >= gridHeight) {
                break;
            }
        }
    });
}

/* generate word search algorithmically */
function generateWordSearch(words, gridWidth, gridHeight) {
    resizeCanvas();
    resizeTiles();

    let grid = [];

    let gridSizeX = gridWidth;
    let gridSizeY = gridHeight;

    let gridIterX = 0;
    let gridIterY = 0;

    while (gridIterY < gridSizeY) {
        while (gridIterX < gridSizeX) {
            let code = 65 + Math.floor(Math.random() * 26);
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

/* change the size of letter tiles to match the canvas size */
function resizeTiles() {
    TILE_W = canv.width / gridWidth;
    TILE_H = TILE_W;
    FONT_SIZE = TILE_W * .75;
}

/* change the size of the canvas to match the page width */
function resizeCanvas() {
    const size = document.getElementById('word-search-container').offsetHeight;
    canv.width = size;
    canv.height = canv.width;
}

function drawWordSearch(grid, showWords) {
    cotx.clearRect(0, 0, canv.width, canv.height);
    cotx.font = FONT_SIZE.toString() + "px sans-serif";
    cotx.textAlign = "center";

    grid.forEach((tile) => {
        tile.draw(showWords);
    });

    cotx.textAlign = "start";
}

function addWordToList(word, list = wordList) {
    word = filterWord(word);

    if (!word) {
        return false;
    }

    if (word.length >= gridWidth || word >= gridHeight) {
        return false;
    }

    if (list.includes(word)) {
        return false;
    }

    list.push(word);
    populateWordList();

    return true;
}

function clearWordColumns() {
    for (i = 1; i <= 5; i++) {
        const colElement = document.getElementById('col' + (i + 1).toString());

        if (!colElement) {
            return;
        }

        while (colElement.firstChild) {
            colElement.removeChild(colElement.firstChild);
        }
    }
}

function populateWordList(list = wordList) {
    const colPattern = [2,3,1];
    clearWordColumns();

    let colIndex = 0;
    list.forEach((word) => {
        const colElement = document.getElementById('col' + (colPattern[colIndex] + 1).toString());
        const listItem = document.createElement('p');
        const listWord = document.createTextNode(word);

        listItem.id = "word-card";
        listItem.className = "card mx-auto py-1";
        listItem.appendChild(listWord);
        listItem.onclick = () => {
            colElement.removeChild(listItem);
            list.splice(list.indexOf(word), 1);
            btnGenerate();
        };

        colElement.appendChild(listItem);

        colIndex = (colIndex + 1) % colPattern.length;
    });
}

function filterWord(word) {
    word = word.replace(/[^a-zA-Z]+/g, '');
    word = word.toUpperCase();

    return word;
}

function filterWordList(list, gridW = gridWidth, gridH = gridHeight) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].length >= gridW || list[i].length >= gridH) {
            list.splice(i, 1);
        }

        list[i] = filterWord(list[i]);
    }
}

function btnGenerate() {
    drawWordSearch(generateWordSearch(wordList, gridWidth, gridHeight), false);
}

function btnAdd() {
    if (addWordToList(document.getElementById('word-input').value)) {
        document.getElementById('word-input').value = '';
        btnGenerate();
    };
}

function btnClear() {
    clearWordColumns();
    wordList = [];
    btnGenerate();
}


/* on page load */
populateWordList();
btnGenerate();