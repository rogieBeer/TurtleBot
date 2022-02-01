// -star to auto assign

const pull = require("../constants/constant");
const role = pull.STARCITIZEN;

module.exports = {
    name: 'star',
    description: "Sets role to Star Citizen!",
    execute(message, args) {
        if (message.member.roles.cache.has(role)) {
            message.channel.send("Your are already assigned to that role");
        } else {
            message.member.roles.add(role).catch(console.error);
        }

    }
}