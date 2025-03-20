/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as DashbordImport } from './routes/dashbord'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const DashbordRoute = DashbordImport.update({
  id: '/dashbord',
  path: '/dashbord',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashbord': {
      id: '/dashbord'
      path: '/dashbord'
      fullPath: '/dashbord'
      preLoaderRoute: typeof DashbordImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashbord': typeof DashbordRoute
  '/login': typeof LoginRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dashbord': typeof DashbordRoute
  '/login': typeof LoginRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashbord': typeof DashbordRoute
  '/login': typeof LoginRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/dashbord' | '/login'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/dashbord' | '/login'
  id: '__root__' | '/' | '/dashbord' | '/login'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashbordRoute: typeof DashbordRoute
  LoginRoute: typeof LoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashbordRoute: DashbordRoute,
  LoginRoute: LoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashbord",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashbord": {
      "filePath": "dashbord.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
