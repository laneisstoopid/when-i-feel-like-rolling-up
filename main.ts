basic.forever(function () {
    for (let index = 0; index < 1.1111111111111112e+56; index++) {
        let sprite: game.LedSprite = null
        basic.showNumber(9)
        basic.showLeds(`
            # . # # #
            # . # . .
            # # # # #
            . . # . #
            # # # . #
            `)
        sprite.move(1)
    }
})
