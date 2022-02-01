const random = require('random')

module.exports = {
    random: function () {
        var reply = random.int(min = 0, max = 100)
        return reply;
    }
}