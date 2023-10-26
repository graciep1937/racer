controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    baddie.setPosition(0, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.siren), music.PlaybackMode.UntilDone)
    sprites.destroy(coin, effects.spray, 500)
    info.changeScoreBy(10)
})
let coin: Sprite = null
let baddie: Sprite = null
scene.setBackgroundImage(assets.image`cityscape2`)
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`car`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
baddie = sprites.create(img`
    f f a a a e e a a 9 9 e e 9 9 9 
    f f a a a a a a a 9 9 9 9 9 9 9 
    a a a a a a a a a 9 9 9 9 9 f f 
    a a a a a a a a a 9 9 9 9 9 f f 
    a a a a a a a a a 9 9 9 9 9 9 9 
    f f a a 3 3 3 3 3 3 3 3 3 9 9 9 
    f f a a 3 4 4 4 4 4 4 4 3 9 f f 
    a a a a 3 4 4 4 4 4 4 4 3 9 f f 
    5 a a a 3 4 4 4 4 4 4 4 3 9 9 5 
    a a a a 3 4 4 4 4 4 4 4 3 9 9 9 
    a a a a 3 4 4 4 4 4 4 4 3 9 f f 
    f f a a 3 3 3 3 3 3 3 3 3 9 f f 
    f f a a a a a 9 9 9 9 9 9 9 9 9 
    a a a a a a a 9 9 9 9 9 9 9 9 9 
    a a a a a a a 9 9 9 9 9 9 9 9 9 
    a a a a a a a 9 9 9 9 9 9 9 9 9 
    `, SpriteKind.Enemy)
baddie.setPosition(0, 0)
baddie.follow(mySprite)
music.play(music.stringPlayable("E E D F A D A F ", 120), music.PlaybackMode.UntilDone)
coin = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.Food)
coin.setPosition(130, 86)
