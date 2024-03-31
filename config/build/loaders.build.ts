import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypescript from "react-refresh-typescript";
import { BuildOptions } from "./types";
import { babelLoadersBuild } from "./babel/babel.loaders.build";

export const loadersBuild = (options: BuildOptions): ModuleOptions['rules'] => {
  const isDev = options.mode === 'development'

  const cssLoaderWithModule = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
      }
    },
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithModule,
      "sass-loader",
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypescript()].filter(Boolean)
        })
      }
    },
    exclude: /node_modules/,
  }

  const babelLoader = babelLoadersBuild(options)

  const assetLoader = {
    test: /\.(png|jpg|gif|jpeg)$/i,
    type: 'asset/resource',
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true
              }
            }
          ]
        }
      }
    }],
  }

  return [
    scssLoader,
    // tsLoader,
    babelLoader,
    assetLoader,
    svgLoader,
  ]
}
