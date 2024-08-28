namespace tilemapToImg {
    //% block
    //% block="generate image from  tilemap $inputTilemap to image $outputImage"
    export function generateImage(inputTilemap: any) {
        let outputImage = image.create(inputTilemap.width, inputTilemap.height)
        for (let x = 0; x < inputTilemap.width / 16; x++) {
            for (let y = 0; y < inputTilemap.height / 16; y++) {
                helpers.imageBlit(
                outputImage, 
                x * 16, 
                x * 16, 
                x * 16 + 15, 
                x * 16 + 15, 
                inputTilemap.tileImageAtLocation(inputTilemap.getTileLocation(x, y)), 
                0, 
                0, 
                16, 
                16, 
                true, 
                false
                )
            }
        }
        return outputImage
    }
}
