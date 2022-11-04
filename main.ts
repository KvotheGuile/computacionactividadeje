input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let list: game.LedSprite[] = []
let Meteor4 = 0
let Meteor3 = 0
let Meteor2 = 0
let Meteor1 = 0
let Meteor0 = 0
let Player: game.LedSprite = null
let speed = 500
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
    list[index].set(LedSpriteProperty.Brightness, 20)
}
basic.forever(function () {
    basic.pause(speed)
    for (let index = 0; index <= 4; index++) {
        if (list[index].get(LedSpriteProperty.Y) < 4) {
            list[index].change(LedSpriteProperty.Y, 1)
        } else {
            list[index].set(LedSpriteProperty.Y, 0)
        }
    }
})
