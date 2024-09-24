namespace tilemapToImg {
    //% block="generate image from  tilemap $inputTilemap"
    export function generateImage(inputTilemap: tiles.TileMapData) {
        let outputImage = image.create(inputTilemap.width * 16, inputTilemap.height * 16)
        for (let x = 0; x < inputTilemap.width; x++) {
            for (let y = 0; y < inputTilemap.height; y++) {
                helpers.imageBlit(outputImage, x * 16, y * 16, 16, 16, inputTilemap.getTileImage(inputTilemap.getTile(x, y)), 0, 0, 16, 16, true, false)
            }
        }
        return outputImage
    }
}
