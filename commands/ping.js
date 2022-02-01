const pull = require("../constants/constant");
const role = pull.MODERATOR;

module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args) {
        if (message.member.roles.cache.has(role)) {
            message.channel.send('pong!');
        }


    }
}

