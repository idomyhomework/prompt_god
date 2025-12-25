import { trpc } from "../../lib/trpc";

export const AllIdeasPage = () => {
   const result = trpc.getIdeas.useQuery();
   console.log(result);
   return <></>;
   // return (
   //    <div className="min-h-screen flex items-center justify-center bg-slate-900">
   //       <h1 className="text-3xl font-bold text-white">Tailwind v3 with pnpm 🚀</h1>
   //    </div>
   // );
};
