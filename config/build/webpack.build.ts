import webpack from "webpack";
import { devServerBuild } from "./dev-server.build";
import { loadersBuild } from "./loaders.build";
import { pluginsBuild } from "./plugins.build";
import { resolversBuild } from "./resolvers.build";
import { BuildOptions } from "./types";

export const webpackBuild = (options: BuildOptions): webpack.Configuration => {
  const isDev = options.mode === 'development'
  const { mode, paths } = options
  return ({
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true
    },
    module: {
      rules: loadersBuild(options),
    },
    resolve: resolversBuild(options),
    plugins: pluginsBuild(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? devServerBuild(options) : undefined
  })
}
