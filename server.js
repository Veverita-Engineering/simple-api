import express from 'express';

const app = express();
app.use(express.json());

// Root endpoint
app.get("/", (request, response) => {
    const body = {
        status: "UP",
        version: process.env.APP_VERSION,
        pod: process.env.HOSTNAME,
        //env: process.env
    };

    response.send(body);
});

const listener = app.listen(process.env.PORT, () => {
    console.log("The API is listening on port " + listener.address().port);
});