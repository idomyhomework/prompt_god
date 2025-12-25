import { initTRPC } from "@trpc/server";

const ideas = [
   { nick: "1", name: "Idea 1", description: "description of idea 1" },
   { nick: "2", name: "Idea 2", description: "description of idea 2" },
   { nick: "3", name: "Idea 3", description: "description of idea 3" },
];

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
   getIdeas: trpc.procedure.query(() => {
      return { ideas };
   }),
});

export type TrpcRouter = typeof trpcRouter;
