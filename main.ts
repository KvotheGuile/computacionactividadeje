input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
function Over () {
    gameOn = 0
    score = Math.floor(control.millis() / 5000)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.ForeverInBackground)
    Player.delete()
    for (let index = 0; index <= 4; index++) {
        list[index].delete()
    }
    while (true) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.showNumber(score)
        }
        basic.showString("RESTART>LOGO")
        basic.pause(1000)
    }
}
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
let list: game.LedSprite[] = []
let Meteor4 = 0
let Meteor3 = 0
let Meteor2 = 0
let Meteor1 = 0
let Meteor0 = 0
let Player: game.LedSprite = null
let gameOn = 0
let score = 0
score = 0
gameOn = 1
let speed = 700
Player = game.createSprite(2, 4)
let meteors = [
Meteor0,
Meteor1,
Meteor2,
Meteor3,
Meteor4
]
for (let index = 0; index <= 4; index++) {
    list[index] = game.createSprite(index, 0)
    list[index].set(LedSpriteProperty.Brightness, 5)
}
basic.forever(function () {
    basic.pause(speed)
    if (gameOn == 1) {
        for (let index = 0; index <= 4; index++) {
            if (list[index].get(LedSpriteProperty.Y) == 4) {
                list[index].set(LedSpriteProperty.Y, 0)
                list[index].set(LedSpriteProperty.Brightness, 5)
            }
            if (list[index].get(LedSpriteProperty.Y) < 4) {
                if (list[index].get(LedSpriteProperty.Brightness) >= 20) {
                    list[index].change(LedSpriteProperty.Y, 1)
                } else if (0 != randint(0, 2)) {
                    list[index].set(LedSpriteProperty.Brightness, 110)
                }
            }
        }
    }
    if (Math.floor(control.millis() / 5000) > 6) {
        speed = 550
    }
    if (Math.floor(control.millis() / 5000) > 12) {
        speed = 400
    }
})
loops.everyInterval(speed / 2, function () {
    for (let index = 0; index <= 4; index++) {
        if (Player.isTouching(list[index])) {
            Over()
        }
    }
})
