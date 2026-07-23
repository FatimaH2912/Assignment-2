const app = require("../index");
const initializeDatabase = require("./initDatabase");

const PORT = 3000;

async function startServer() {
    await initializeDatabase();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();