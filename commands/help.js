// -help prints a commands list

module.exports = {
  name: 'help',
  description: "PM user with help options",
  execute(message, args) {
    // message.author.send("Help");
    message.author.send({
      embed: {
        color: 3447003,
        title: "Turtle Help is over 9000!",
        url: "http://google.com",
        description: "Commands list for Turtle Bot",
        fields: [{
          name: "!help",
          value: "DMs user with the list you are currently reading"
        },
        {
          name: "Assign Roles",
          value: "*Adds the game role to your account and allows user to take part in that games voice channels and news* \n **__!apex__** Apex Legends \n **__!star__** Star Citizen"
        },
        {
          name: "!roll",
          value: "Returns a random number between 0 - 100."
        },
        {
          name: "!ping",
          value: "Used for testing commands *MODERATOR only*"
        }],
        timestamp: new Date(),
      }
    });
  }
}