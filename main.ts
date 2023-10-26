controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    baddie.setPosition(0, 0)
})
let baddie: Sprite = null
scene.setBackgroundImage(assets.image`cityscape2`)
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
