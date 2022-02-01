// -apex to auto assign

const pull = require("../constants/constant");
const role = pull.APEX;

module.exports = {
    name: 'apex',
    description: "Sets role to Apex Legends!",
    execute(message, args) {
        if (message.member.roles.cache.has(role)) {
            message.channel.send("Your are already assigned to that role");
        } else {
            message.member.roles.add(role).catch(console.error);
        }

    }
}