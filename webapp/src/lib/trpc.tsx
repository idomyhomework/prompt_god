import type { TrpcRouter } from "@prompt_god/backend/src/trpc";
import { createTRPCReact } from "@trpc/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, loggerLink, type TRPCLink } from "@trpc/client";

// import { observable } from "@trpc/server/observable";
// import Cookies from 'js-cookie'
// import superjson from 'superjson'
// import { env } from './env'
// import { sentryCaptureException } from './sentry'

export const trpc = createTRPCReact<TrpcRouter>();

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         retry: false,
         refetchOnWindowFocus: false,
      },
   },
});

// const customTrpcLink: TRPCLink<TrpcRouter> = () => {
//   return ({ next, op }) => {
//     return observable((observer) => {
//       const unsubscribe = next(op).subscribe({
//         next(value) {
//           observer.next(value)
//         },
//         error(error) {
//           if (!error.data?.isExpected) {
//             sentryCaptureException(error)
//             if (env.NODE_ENV !== 'development') {
//               console.error(error)
//             }
//           }
//           observer.error(error)
//         },
//         complete() {
//           observer.complete()
//         },
//       })
//       return unsubscribe
//     })
//   }
// }

const trpcClient = trpc.createClient({
   links: [
      httpBatchLink({
         url: "http://localhost:3000/sparks",
      }),
   ],
});

export const TrpcProvider = ({ children }: { children: React.ReactNode }) => {
   return (
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
         <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </trpc.Provider>
   );
};
