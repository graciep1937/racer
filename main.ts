controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    mySprite.ay += -10
    mySprite.setVelocity(50, -50)
    info.changeScoreBy(10)
})
let coin: Sprite = null
let baddie: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`cityscape2`)
scroller.scrollBackgroundWithSpeed(-50, 0)
mySprite = sprites.create(assets.image`car`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
music.play(music.stringPlayable("E E D F A D A F ", 120), music.PlaybackMode.UntilDone)
info.setScore(0)
info.setLife(3)
forever(function () {
    baddie = sprites.createProjectileFromSide(img`
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
        `, 50, 0)
    baddie.y = randint(15, 115)
    pause(2000)
})
forever(function () {
    coin = sprites.create(assets.image`coin`, SpriteKind.Food)
    coin.setVelocity(-30, 0)
    coin.setPosition(randint(15, 115), randint(15, 115))
    pause(3000)
})
