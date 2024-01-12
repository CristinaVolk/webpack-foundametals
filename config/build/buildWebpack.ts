import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildWebServer} from "./buildWebServer";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";

export function buildWebpack (options: BuildOptions): webpack.Configuration {
	const {mode, paths} = options;
	const isDev = mode === 'development';

	const config: webpack.Configuration = {
		mode: mode ?? 'development',
		entry: paths.entry,
		output: {
			path: paths.output,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devServer: buildWebServer(options),
		devtool: isDev ? 'inline-source-map' : undefined,
	}

	return config;
}
