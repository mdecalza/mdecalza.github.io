/* Copyright 2024 Matthew DeCalzadilla */

/* game canv setup */
const canv = document.getElementById('game-window');
const cotx = canv.getContext('2d');

canv.width = 800;
canv.height = 600;

cotx.imageSmoothingEnabled = false;

/* game tile size */
const tileWidth = 100;
const tileHeight = 25;

/* map size definition */
const MAP_SIZE_X = 8;
const MAP_SIZE_Y = 8;

/* camera position */
function resetCamera() {
    cameraViewX= -canv.width / 2 + tileWidth / 2;
    cameraViewY = -(canv.height - MAP_SIZE_Y * tileHeight) / 2;
    screenDraw();
}

resetCamera();

let scrollSpeed = 15;

let mouseAnchorX = -1;
let mouseAnchorY = -1;

let highlightedTile = {};

/* mouse shit */
let mouseX = -1;
let mouseY = -1;

let drag = false;
let dragInterval = undefined;

/* map initialization */
let map = []

/* apply an affine transformation to a single 2D point */
function affineTransformPoint(x, y, a, b, c, d, e, f) {
    return {x : x*a + y*c + e,
            y : x*b + y*d + f};
}

/* apply the inverse of a given affine transformation to a single 2D point */
function inverseTransformPoint(x, y, a, b, c, d, e, f) {
    const det = a*d - b*c;
    a = d / det;
    b = -b / det;
    c = -c / det;
    d = a / det;
    e = -e;
    f = -f;

    return affineTransformPoint(x, y, a, b, c, d, e, f);
}

/* calculate the (less accurate) manhattan distance between two points */
function manhattanDistance(p1, p2) {
    return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
}

/* calculate euclidian distance between two points */
function euclidianDistance(p1, p2) {
    return Math.sqrt(Math.pow((p2.x-p1.x), 2) + Math.pow((p2.y-p1.y), 2));
}

/* calculate sign of coordinate in triangle */
function barySign(p1, p2, p3) {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
}

/* check if a 2D point is within a triangle using barycentric coordinates */
function pointInTriangle(point, triangle) {
    const d1 = barySign(point, triangle.a, triangle.b);
    const d2 = barySign(point, triangle.b, triangle.c);
    const d3 = barySign(point, triangle.c, triangle.a);

    const hasNegSign = (d1 < 0) || (d2 < 0) || (d3 < 0);
    const hasPosSign = (d1 > 0) || (d2 > 0) || (d3 > 0);

    return !(hasNegSign && hasPosSign);
}

/* replace a tile on the map with another type of tile */
function replaceTile(tileIndex, replacement) {
    map.splice(tileIndex, 1, replacement);
}

/* translates an X,Y cartesian coordinate to an index in the map array */
function XYtoMapIndex(x, y, mapSizeX) {
    return y * mapSizeX + x;
}

/* increases the zoom level while clamping at max */
function cameraZoomIn(zoomLevel = 2, zoomMax = 12) {
}

/* increases the zoom level while clamping at min */
function cameraZoomOut(zoomLevel = 2, zoomMin = 2) {
}

function screenClear(context, width, height) {
    // clear the screen before each frame is drawn
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
}

/* draw each map tile on screen */
async function screenDraw(context, width, height) {
    screenClear(cotx, canv.width * 2, canv.height * 2);
    map.forEach((tile) => {
        tile.draw();
    });
}

/* updates each tile on the map */
async function updateSimulation(m = {}, context) {
    screenClear(cotx, canv.width * 2, canv.height * 2);
    map.forEach((tile) => {
        tile.update(mainbudget);
        tile.draw();
    });
}

/* procedurally generate map terrain */
function generateTerrain(mapSizeX, mapSizeY) {
    map = []

    let mapInitX = 0;
    let mapInitY = 0;

    while (mapInitY < mapSizeY) {
        while (mapInitX < mapSizeX) {
            if (Math.floor(Math.random() * 100) % 4 === 0) {
                map.push(new Water({
                    x: mapInitX,
                    y: mapInitY,
                    w: 1,
                    h: 1
                }));
            }
            else if (Math.floor(Math.random() * 100) % 11 === 0) {
                map.push(new Dirt({
                    x: mapInitX,
                    y: mapInitY,
                    w: 1,
                    h: 1
                }));
            }
            else {
                map.push(new Grass({
                    x: mapInitX,
                    y: mapInitY,
                    w: 1,
                    h: 1
                }));
            }
            mapInitX++;
        }
    
        mapInitX = 0;
        mapInitY++;
    }

    let index = mapSizeX * 2 + 2;
    replaceTile(index, new Road({
        x: index % mapSizeX,
        y: Math.floor(index / mapSizeX),
        w: 1,
        h: 1
    }));

    return map;
}

function createKeyboardListener() {
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'w':
            case 'ArrowUp':
                cameraViewY -= scrollSpeed * 2;
                break;
            case 's':
            case 'ArrowDown':
                cameraViewY += scrollSpeed * 2;
                break;
            case 'a':
            case 'ArrowLeft':
                cameraViewX -= scrollSpeed;
                break;
            case 'd':
            case 'ArrowRight':
                cameraViewX += scrollSpeed;
                break;
            case '+':
                cameraZoomIn();
                break;
            case '-':
                cameraZoomOut();
                break;
            default:
                break;
        }

        screenDraw();
    });
}

async function mouseDragCamera() {
    cameraViewX += (mouseX - mouseAnchorX) / 8;
    cameraViewY += (mouseY - mouseAnchorY) / 8;

    screenDraw();

    if (dragInterval === undefined)
        dragInterval = setInterval(mouseDragCamera, 30);
}

function createMouseListener() {
    canv.addEventListener('mousemove', (e) => {
        mouseX = e.offsetX;
        mouseY = e.offsetY;

        if (drag)
            mouseDragCamera();
        screenDraw();
    });

    canv.addEventListener('mousedown', () => {
        drag = true;
        mouseAnchorX = mouseX;
        mouseAnchorY = mouseY;
        screenDraw();
    });

    canv.addEventListener('mouseup', () => {
        drag = false;
        dragInterval = clearInterval(dragInterval);
        const dragTolerance = 3;

        if (Math.abs(mouseX-mouseAnchorX) <= dragTolerance &&
            Math.abs(mouseY-mouseAnchorY) <= dragTolerance) {
                highlightedTile.interact(maintool);
        }

        screenDraw();
    });

    canv.addEventListener('mouseenter', () => {
        drag = false;
        dragInterval = clearInterval(dragInterval);
    });
}

function saveMap() {
    
}

function gameStart() {
    createKeyboardListener();
    createMouseListener();

    const m = new Map(8, 8);
    m.draw();

    setInterval(updateSimulation, 200);
}

class Game {
    #screen = {};
    #map = {};
    #tool = {};
    #budget = {};
}

class Screen {
    #canvas = {};
    #context = {};

    constructor(elementID) {
        this.canvas = document.getElementById(elementID);
        this.canvas.width = 800;
        this.canvas.height = 600;

        this.context = this.canvas.getContext('2d');
        this.context.imageSmoothingEnabled = false;
    }

    draw(game) {
        // clear the screen before each frame is drawn
        cotx.fillStyle = 'black';
        cotx.fillRect(0, 0, canv.width * 2, canv.height * 2);
        game.map.forEach((tile) => { tile.draw(); });
    }
}

class Map {
    #tiles = []
    #sizeX = 0;
    #sizeY = 0;

    constructor(mapSizeX, mapSizeY) {
        this.#sizeX = mapSizeX;
        this.#sizeY = mapSizeY
        this.#tiles = generateTerrain(mapSizeX, mapSizeY);
    }

    getTileAtXY(x,y) {
        const i = y * this.#sizeX + x;
        if (i < this.#sizeX * this.#sizeY)
            return this.#tiles[y*this.#sizeX+x];
        return undefined;
    }

    getTileAtIndex(i) {
        if (i < this.#sizeX * this.#sizeY)
            return this.#tiles[i];
        return undefined;
    }

    async draw() {
        this.#tiles.forEach((tile) => { tile.draw(); });
    }
}

class Tool {
    #selectedTool = "road";

    switchTool(newTool) {
        this.#selectedTool = newTool;
    }

    interact(tile, budget) {
        let newTile = {};

        switch(this.#selectedTool) {
            case "bulldozer":
                newTile = new Dirt(tile.position);
                budget.subtract(newTile._cost);
                replaceTile(tile.mapIndex(), newTile);
                return;
            case "road":
                newTile = new Road(tile.position);
                break;
            case "water":
                newTile = new Water(tile.position);
                break;
            case "rzone":
                newTile = new ResidentialZone(tile.position);
                break;
            case "czone":
                newTile = new CommercialZone(tile.position);
                break;
            case "smiley":
                newTile = new Smiley(tile.position);
                break;
            default:
                newTile = {};
                break;
        }

        if (budget.total >= newTile._cost) {
            budget.subtract(newTile._cost);
            replaceTile(tile.mapIndex(), newTile);
        }
    }
}

class Budget {
    constructor(startingAmount = 0) {
        this.total = startingAmount;
        this.displayBudget();
    }

    subtract(amount) {
        if (this.total - amount > Number.MIN_SAFE_INTEGER)
            this.total -= amount;
        this.displayBudget();
    }

    add(amount) {
        if (this.total + amount < Number.MAX_SAFE_INTEGER)
            this.total += amount;
        this.displayBudget();
    }

    async displayBudget() {
        document.getElementById('budget-container').innerHTML = "Budget: $" + this.total.toFixed(2);
    }
}

class Tile {
    #isHighlighted = false;
    #isSelected = false;
    
    #img = {};

    #updatesReceived = 1;

    constructor(position, cost = 0, revenue = 0, interest = 0, tax = 0, spriteSrc = "") {
        this.position = position;

        this._cost = cost;
        this._revenue = revenue;
        this._interest = interest;
        this._tax = tax;

        this.#img = new Image();
        this.#img.src = spriteSrc;
    }

    getPosition() {
        return this.position;
    }

    mapIndex(mapSizeX) {
        return this.position.y * MAP_SIZE_X + this.position.x;
    }

    /* get tiles directly north, east, south, or west of this tile */
    getNeighboringTiles() {
        const mapSizeX = MAP_SIZE_X;

        let neighbors = [];

        let neighbor = map[this.mapIndex() - 1];
        if (neighbor)
            neighbors.push(neighbor);

        neighbor = map[this.mapIndex() + 1];
        if (neighbor)
            neighbors.push(neighbor);

        neighbor = map[this.mapIndex() - mapSizeX];
        if (neighbor)
            neighbors.push(neighbor);
    
        neighbor = map[this.mapIndex() + mapSizeX];
        if (neighbor)
            neighbors.push(neighbor);

        neighbor = map[this.mapIndex() - mapSizeX - 1];
        if (neighbor)
            neighbors.push(neighbor);
        
        neighbor = map[this.mapIndex() - mapSizeX + 1];
        if (neighbor)
            neighbors.push(neighbor);
    
        neighbor = map[this.mapIndex() + mapSizeX - 1];
        if (neighbor)
            neighbors.push(neighbor);
    
        neighbor = map[this.mapIndex() + mapSizeX + 1];
        if (neighbor)
            neighbors.push(neighbor);

        return neighbors;
    }

    /* calculate income per update */
    getIncome() {
        return (this._revenue * this.#updatesReceived * this._interest) ** 1.000001;
    }

    /* calculate expense per update */
    getExpense() {
        return 1.001 ** (this._cost * this.#updatesReceived * this._tax);
    }

    /* calculates the difference between tile revenue and expense each update */
    getBalance() {
        return this.getIncome() - this.getExpense();
    }

    /* calculates tile value based on attributes of itself and neighboring tiles */
    getValue() {
        let value = this.getBalance();
        const neighbors = this.getNeighboringTiles();

        neighbors.forEach((neighbor) => {
            value += neighbor.getIncome();
        });

        value /= neighbors.length + 1;

        if (isFinite(value))
            return value;
        return 0;
    }

    /* draw the tile on screen */
    draw() {
        const x = this.position.x * (tileWidth / 2) - cameraViewX - this.position.y * tileWidth / 2;
        const y = this.position.y * tileHeight - cameraViewY + this.position.x * tileHeight;
        const spriteYOffset = this.#img.height - tileHeight*2;

        if (x+tileWidth < 0 || x >= canv.width)
            return;
        if (y+tileHeight*2 < 0 || y-spriteYOffset >= canv.height)
            return;

        // draw the sprite
        cotx.drawImage(this.#img, x, y-spriteYOffset);

        const mousePos = {x:mouseX, y:mouseY};
        const tileLeftHalf = {a: {x: x + tileWidth / 2, y: y - tileHeight}, b: {x: x, y: y}, c: {x: x + tileWidth / 2, y: y + tileHeight}};
        const tileRightHalf = {a: {x: x + tileWidth / 2, y: y - tileHeight}, b: {x: x + tileWidth, y :y}, c: {x: x + tileWidth / 2, y: y + tileHeight}};

        // check if the mouse is hovering over a tile
        this.#isHighlighted = false;
        if (pointInTriangle(mousePos, tileLeftHalf) ||
            pointInTriangle(mousePos, tileRightHalf)) {
                this.#isHighlighted = true;
                highlightedTile = this;

                cotx.fillStyle = 'white';            
                cotx.beginPath();
    
                cotx.moveTo(x+tileWidth/2, y+tileHeight-4);
                cotx.lineTo(x+tileWidth, y);
                cotx.lineTo(x+tileWidth/2, y+tileHeight);
                cotx.lineTo(x, y);
                cotx.fill();
    
                cotx.moveTo(x+tileWidth/2, y-tileHeight+2);
                cotx.lineTo(x+tileWidth, y);
                cotx.lineTo(x+tileWidth/2, y-tileHeight);
                cotx.lineTo(x, y);
                cotx.fill();
    
                cotx.font = "11px sans-serif";
                cotx.fillText("(" + this.position.x + ", " + this.position.y + ")", x + tileWidth / 3, y - tileHeight * 1.5 - spriteYOffset);
                cotx.fillText("$" + this.getValue().toFixed(2), x + tileWidth / 3, y - tileHeight - spriteYOffset);
        }
    }

    interact(tool) {
        if (this.#isHighlighted)
            this.#isSelected = true;
        else if (!this.#isHighlighted && this.#isSelected)
            this.#isSelected = false;

        mainbudget.total -= this._cost;
        tool.interact(this, mainbudget);
    }

    // abstract -- update the game logic for this tile
    async update(budget) {
        if (this.#updatesReceived + 1 < Number.MAX_SAFE_INTEGER)
            this.#updatesReceived++;
        budget.add(this.getValue());
    }
}

class Water extends Tile {
    constructor(position) {
        super(position, 50, 0, 0.25, 0, "img/games/citygame/t_water.png");
    }
}

class Grass extends Tile {
    constructor(position) {
        super(position, 0, 0, 0, 0, "img/games/citygame/t_grass.png");
    }
}

class Dirt extends Tile {
    constructor(position) {
        super(position, 10, 0, 0, 0, "img/games/citygame/t_dirt.png");
    }

    update(budget) {
        super.update(budget);
        if (Math.random() > 0.9)
            replaceTile(this.mapIndex(), new Grass(this.position));
    }
}

class SmallOffice extends Tile {
    constructor(position) {
        super(position, 0, 25, 0.015, 0.0025, "img/games/citygame/t_mediumoffice.png");
    }

    checkEvolution() {
        return this.getValue() > 20;
    }

    update(budget) {
        super.update(budget);
        if (this.checkEvolution())
            replaceTile(this.mapIndex(), new MediumOffice(this.position));
    }
}

class MediumOffice extends Tile {
    constructor(position) {
        super(position, 0, 50, 0.03, 0.005, "img/games/citygame/t_mediumoffice.png");
    }

    checkEvolution() {
        return this.getValue() > 50;
    }

    update(budget) {
        super.update(budget);
        if (this.checkEvolution())
            replaceTile(this.mapIndex(), new LargeOffice(this.position));
    }
}

class LargeOffice extends Tile {
    constructor(position) {
        super(position, 0, 75, 0.06, 0.015, "img/games/citygame/t_mediumoffice.png");
    }

    checkEvolution() {
        return this.getValue() > 100;
    }

    update(budget) {
        super.update(budget);
        if (this.checkEvolution())
            replaceTile(this.mapIndex(), new SuperOffice(this.position));
    }
}

class SuperOffice extends Tile {
    constructor(position) {
        super(position, 0, 100, 0.085, 0.0225, "img/games/citygame/t_mediumoffice.png");
    }
}

class House extends Tile {
    constructor(position) {
        super(position, 0, 35, 0.0225, 0.001, "img/games/citygame/t_house.png");
    }
}

class Smiley extends Tile {
    constructor(position) {
        super(position, 100000, 400, 0.01, -0.05, "img/games/citygame/t_smiley.png");
    }
}

class Road extends Tile {
    constructor(position) {
        super(position, 20, 0, 0, 0.005, "img/games/citygame/t_road.png");
    }
}

class Zone extends Tile {
    checkEvolution() {
        if (Math.random() > 0.5) {
            const neighbors = this.getNeighboringTiles();
            for (let i = 0; i < neighbors.length; i++) {
                if (neighbors[i] instanceof Road)
                    return true;
            }
        }

        return false;
    }
}

class ResidentialZone extends Zone {
    constructor(position) {
        super(position, 250, 0, 0, 0.02, "img/games/citygame/t_rzone.png");
    }

    update(budget) {
        super.update(budget);
        if (this.checkEvolution())
            replaceTile(this.mapIndex(), new House(this.position));
    }
}

class CommercialZone extends Zone {
    constructor(position) {
        super(position, 300, 0, 0, 0.05, "img/games/citygame/t_czone.png");
    }

    update(budget) {
        super.update(budget);
        if (this.checkEvolution())
            replaceTile(this.mapIndex(), new SmallOffice(this.position));
    }
}

const maingame = new Game();
const maintool = new Tool();
const mainbudget = new Budget(10000);

/* start the game setup and logic */
gameStart();