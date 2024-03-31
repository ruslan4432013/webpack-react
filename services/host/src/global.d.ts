declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare const __PLATFORM__: 'desktop' | 'mobile'
declare const __ENV__: 'production' | 'development'

declare module "shop/router" {
  import { RouteObject } from "react-router-dom";
  const content: RouteObject[]
  export default content
}
declare module "admin/router" {
  import { RouteObject } from "react-router-dom";
  const content: RouteObject[]
  export default content
}
