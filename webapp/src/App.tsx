import "./App.css";
import { TrpcProvider } from "./lib/trpc";
import { AllSparksPage } from "./pages/AllIdeasPage";
import { ViewSparkPage } from "./pages/ViewSparkPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAllSparksRoute, getViewSparkRoute, getViewSparkRouteParams } from "./lib/routes";

export const App = () => {
   return (
      <TrpcProvider>
         <BrowserRouter>
            <Routes>
               <Route path={getAllSparksRoute()} element={<AllSparksPage />} />
               <Route path={getViewSparkRoute(getViewSparkRouteParams)} element={<ViewSparkPage />} />
            </Routes>
         </BrowserRouter>
      </TrpcProvider>
   );
};
