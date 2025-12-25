import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { trpcRouter } from "./trpc";
import type { TrpcRouter } from "./trpc";
import cors from "cors";

const expressApp = express();
expressApp.use(cors());
expressApp.get("/ping", (req, res) => {
   res.send("pong");
});

expressApp.use(
   "/trpc",
   trpcExpress.createExpressMiddleware({
      router: trpcRouter,
   })
);

expressApp.listen(3000, () => {
   console.log("Listening at localhost:3000");
});

export type { TrpcRouter };
