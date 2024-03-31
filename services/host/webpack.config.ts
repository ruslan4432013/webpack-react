import path from 'node:path'
import webpack from "webpack";
import 'webpack-dev-server'
import { webpackBuild, type BuildMode, type BuildOptions, type BuildPlatform } from "@packages/build-config";
import packageJson from './package.json'

type EnvVariables = {
  mode: BuildMode,
  port: number,
  analyzer?: boolean;
  platform?: BuildPlatform;
  SHOP_REMOTE_URL?: string;
  ADMIN_REMOTE_URL?: string;
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

  const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? 'http://localhost:3001'
  const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? 'http://localhost:3002'

  config.plugins?.push(new webpack.container.ModuleFederationPlugin({
    name: 'host',
    filename: 'remoteEntry.js',

    remotes: {
      shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
      admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`,
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
