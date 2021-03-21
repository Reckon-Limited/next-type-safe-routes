/* eslint no-use-before-define: 0 */ // --> OFF
// prettier-ignore

// IMPORTANT! This file is autogenerated by the `type-safe-next-routes`
// package. You should _not_ update these types manually...

declare module "next-type-safe-routes" {
  export type TypeSafePage = "/" | { route: "/users/[userId]", userId: string | string[] | number } | "/users";
  export type TypeSafeApiRoute = "/api/mocks" | { route: "/api/users/[userId]", userId: string | string[] | number } | "/api/users";

  export const getPathname = (typeSafeUrl: TypeSafePage | TypeSafeApiRoute) => string;
  export const getRoute = (typeSafeUrl: TypeSafePage | TypeSafeApiRoute, query?: any) => string;
}
