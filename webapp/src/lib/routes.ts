const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
   return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>;
};

export const getAllSparksRoute = () => "/";

export const getViewSparkRouteParams = getRouteParams({ sparkNick: true });
export type ViewSparkRouteParams = typeof getViewSparkRouteParams;
export const getViewSparkRoute = ({ sparkNick }: ViewSparkRouteParams) => `/sparks/${sparkNick}`;

// export const getViewSparkRouteParams = { sparkNick: ":sparkNick" };
// export type ViewSparkRouteParams = { sparkNick: string };
// export const getViewSparkRoute = ({ sparkNick }: { sparkNick: string }) => `/sparks/${sparkNick}`;
