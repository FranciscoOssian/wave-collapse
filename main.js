const tiles = []
tiles[0] = './images/blank.png'
tiles[1] = './images/down.png'
tiles[2] = './images/left.png'
tiles[3] = './images/right.png'
tiles[4] = './images/up.png'


//const tileSizePx = 300
//const numberOfTiles = 9

const ulElement = document.getElementById("game")

const TileSprite = (tileUrl) => {
    const img = document.createElement('img')
    img.src = tileUrl
    const tile = document.createElement('li')
    tile.appendChild(img)
    return tile
}

const NoTileSprite = () => {
    const tile = document.createElement('li')
    return tile
}

/*for(let tile of tiles){
    ulElement.appendChild( TileSprite(tile) )
    console.log(tile)
}*/

const tilePosInit = Math.floor(Math.random() * 10);
const tileInit = Math.floor(Math.random() * 5);

for(let i = 0; i <= 8; ++i){
    ulElement.appendChild( NoTileSprite() )
}

const list = ulElement.childNodes

const a = [...list]

a.map( (tile, i) => {
    if(i === 0) return
    if( tilePosInit === i ){
        const imgTile = document.createElement('img')
        imgTile.src = tiles[ tileInit ]
        tile.appendChild(
            imgTile
        )
    }
} )