import express from 'express';
import cors from "cors";
import pino from "pino-http";
import { env } from "./utils/env.js";
import contactsRouter from './routers/contacts.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import authRouter from './routers/auth.js';



export const setupServer = () => {
    const app = express();

    app.use(cors());
    // const logger = pino({
    //     transport: {
    //         target: "pino-pretty"
    //     }
    // });
    // app.use(logger);

app.use(express.json());

app.use("/contacts", contactsRouter);
app.use("/auth", authRouter);

app.use('*', notFoundHandler);

app.use(errorHandler);

    const port = Number(env("PORT", 3000));


    app.listen(port, () => console.log(`Server is running on port ${port}`));
};