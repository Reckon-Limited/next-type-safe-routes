/* eslint no-use-before-define: 0 */ // --> OFF
// prettier-ignore

// IMPORTANT! This file is autogenerated by the `type-safe-next-pages` 
// package. You should _not_ update these types manually...

declare module "next-type-safe-pages" {
  export type TypeSafePage = "/" | { route: "/links/[linkId]", linkId: string | string[] | number } | "/links";
  export type TypeSafeApiRoute = "/api/api-routes" | { route: "/api/links/[linkId]", linkId: string | string[] | number } | "/api/links" | "/api/routes";

  export const getPathname = (typeSafeUrl: TypeSafePage | TypeSafeApiRoute) => string;
  export const getRoute = (typeSafeUrl: TypeSafePage | TypeSafeApiRoute, query?: any) => string;
}
