import { Configuration } from "webpack";
import { BuildOptions } from "./types";

export const resolversBuild = (options: BuildOptions): Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.paths.src
    }
  }
}
