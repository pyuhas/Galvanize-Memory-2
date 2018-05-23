// Update with your config settings.

module.exports = {
    development: {
        client: "pg",
        connection: "postgres://Galvanize-Memory-2"
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL + '?ssl=true'
    }
};
