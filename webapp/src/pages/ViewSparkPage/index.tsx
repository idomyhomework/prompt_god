import { useParams } from "react-router-dom";

export const ViewSparkPage = () => {
   const { sparkNick } = useParams<{ sparkNick: string }>();
   return (
      <>
         <h1>{sparkNick}</h1>
         <p>description of the spark</p>
         <div>
            <p>text 1</p>
            <p>text 2</p>
            <p>text 3</p>
         </div>
      </>
   );
};
