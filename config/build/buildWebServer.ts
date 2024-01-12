import type {Configuration as  DevServerConfiguration } from 'webpack-dev-server';
import {BuildOptions} from "./types/types";

export function buildWebServer(options: BuildOptions): DevServerConfiguration {
	const isDev = options.mode === 'development';

	return isDev ? {
		port: options.port ?? 3000,
		open: true,
		historyApiFallback: true,
		hot: true
	} : undefined
}
