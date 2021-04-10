require('dotenv').config()

module.exports = {
  port: process.env.PORT || '3000',
  discordToken: process.env.DISCORD_TOKEN,
  serverId: process.env.SERVER_ID || '826891441137516555',
  lobbyChannel: process.env.LOBBY_CHANNEL || '826920758978019348',
  prefix: process.env.PREFIX || '!',
  notifyChannel: '827934314590765086',
  databaseUrl: process.env.HEROKU_POSTGRESQL_SILVER_URL
}
