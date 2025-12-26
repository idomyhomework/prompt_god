import { trpc } from "../../lib/trpc";

export const AllIdeasPage = () => {
   const { data, error, isLoading, isError } = trpc.sparks.useQuery();

   if (isLoading) {
      return <span>Loading....</span>;
   }

   if (isError) {
      return <span>Error: {error.message}</span>;
   }

   return (
      <>
         <h1 className="font-mono">All Ideas</h1>
         {data?.sparks.map((spark) => (
            <div className="font-mono flex flex-col py-2" key={spark.nick}>
               <h2>{spark.name}</h2>
               <p>{spark.description}</p>
            </div>
         ))}
      </>
   );
};
