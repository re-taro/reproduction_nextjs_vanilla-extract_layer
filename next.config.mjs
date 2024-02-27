// @ts-check

import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin({
	identifiers: process.env.NODE_ENV === "production" ? "short" : "debug",
});

/** @type {import("next").NextConfig} */
const config = {};

export default withVanillaExtract(config);
