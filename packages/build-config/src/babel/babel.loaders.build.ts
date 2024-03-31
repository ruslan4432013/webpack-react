import { BuildOptions } from "../types";
import { removeDataTestIdPlugin } from "./remove-data-test-id.plugin";

export const babelLoadersBuild = ({ mode }: BuildOptions) => {
  const isDev = mode === 'development'
  const isProd = mode === 'production'
  const plugins = []
  if (isProd) {
    plugins.push([
      removeDataTestIdPlugin,
      {
        props: ['data-testId']
      }
    ])
  }

  return ({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            '@babel/preset-react',
            {
              runtime: 'automatic'
            }
          ]
        ],
        plugins
      }
    }
  })
}
