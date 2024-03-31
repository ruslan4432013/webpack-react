import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from "./types";

export const devServerBuild = ({ port }: BuildOptions): DevServerConfiguration => {
  return {
    port: port ?? 3000,
    // если раздавать статику через nginx, то надо настроить проксирование на index.html
    historyApiFallback: true,
    hot: true
  }
}
