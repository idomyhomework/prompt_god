import { trpc } from "../../lib/trpc";

export const AllIdeasPage = () => {
   const { data, error, isLoading, isError } = trpc.getIdeas.useQuery();

   if (isLoading) {
      return <span>Loading....</span>;
   }

   if (isError) {
      return <span>Error: {error.message}</span>;
   }

   return (
      <>
         <h1 className="font-mono">All Ideas</h1>
         {data?.ideas.map((idea) => (
            <div className="font-mono flex flex-col py-2" key={idea.nick}>
               <h2>{idea.name}</h2>
               <p>{idea.description}</p>
            </div>
         ))}
      </>
   );
};
