import path from 'node:path'
import webpack from "webpack";
import 'webpack-dev-server'
import { webpackBuild, type BuildMode, type BuildOptions, type BuildPlatform } from "@packages/build-config";
import packageJson from './package.json'

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
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    src: path.resolve(__dirname, 'src')
  }
  const config: webpack.Configuration = webpackBuild({
    mode: env.mode ?? 'development',
    port: env.port ?? 3002,
    platform: env.platform ?? 'desktop',
    paths,
    analyzer: env.analyzer,
  })

  config.plugins?.push(new webpack.container.ModuleFederationPlugin({
    name: 'admin',
    filename: 'remoteEntry.js',
    exposes: {
      './router': './src/app/router/index.tsx'
    },
    shared: {
      ...packageJson.dependencies,
      react: {
        eager: true,
        requiredVersion: packageJson.dependencies['react'],
      },
      'react-router-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-router-dom'],
      },
      'react-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-dom'],
      }
    }
  }))

  return config
}
