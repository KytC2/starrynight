let Star: Sprite = null
scene.setBackgroundColor(7)
info.startCountdown(20)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 4 4 4 . . . . 
    . . . . . . . 4 4 5 5 4 . . . . 
    . . . . 4 4 4 4 5 5 5 4 . . . . 
    . . . . 4 5 5 5 5 5 5 4 . . . . 
    . . . . 4 5 5 5 5 5 5 5 4 4 . . 
    . . . 4 5 5 5 5 5 5 5 5 5 4 . . 
    . . . 4 5 5 5 5 5 5 5 5 5 5 4 . 
    e e e e e 5 e e 5 5 5 5 5 5 4 4 
    e . . . e e e . e 5 5 5 5 4 4 . 
    e e e e e e e . e 5 5 5 5 4 . . 
    e e e e e e e . e 5 5 5 5 4 4 . 
    e e e e e e . e e 5 4 4 4 4 4 . 
    e e e e e e . e e 5 4 . . . . . 
    e e e e e e e e 4 4 4 . . . . . 
    e e e e e e e e . 4 4 . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(750, function () {
    mySprite.setVelocity(-90, -30)
})
game.onUpdateInterval(500, function () {
    Star = sprites.create(img`
        5 5 
        5 5 
        `, SpriteKind.Projectile)
    Star.setVelocity(randint(-90, -30), randint(0, scene.screenHeight()))
    Star.setFlag(SpriteFlag.Ghost, true)
})
