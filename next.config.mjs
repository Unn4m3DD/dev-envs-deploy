/** @type {import('next').NextConfig} */
const nextConfig = {};

import withVercelToolbar from "@vercel/toolbar/plugins/next";
// Instead of module.exports = nextConfig, do this:
export default withVercelToolbar()(nextConfig);
