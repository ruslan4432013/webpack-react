import path from 'node:path'
import webpack from "webpack";
import 'webpack-dev-server'
import { webpackBuild } from "./config/build/webpack.build";
import { BuildMode, BuildOptions, BuildPlatform } from "./config/build/types";


type EnvVariables = {
  mode: BuildMode,
  port: number,
  analyzer?: boolean;
  platform?: BuildPlatform
}

export default (env: Partial<EnvVariables>) => {
  const paths: BuildOptions['paths'] = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    output: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    src: path.resolve(__dirname, 'src')
  }
  const config: webpack.Configuration = webpackBuild({
    mode: env.mode ?? 'development',
    port: env.port ?? 3000,
    platform: env.platform ?? 'desktop',
    paths,
    analyzer: env.analyzer,
  })
  return config
}
