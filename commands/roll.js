const pull = require("../functions/random");


module.exports = {
    name: 'roll',
    description: "returns a random roll",
    execute(message, args) {
        message.channel.send(pull.random());
    }
}