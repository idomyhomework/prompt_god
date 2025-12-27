import { trpc } from "../../lib/trpc";
import { Link } from "react-router-dom";
import { getViewSparkRoute } from "../../lib/routes";

export const AllSparksPage = () => {
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
               <h2>
                  <Link to={getViewSparkRoute({ sparkNick: spark.nick })}>{spark.name}</Link>
               </h2>
               <p>{spark.description}</p>
            </div>
         ))}
      </>
   );
};
