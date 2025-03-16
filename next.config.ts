const nextConfig = {
  output: "export", // ✅ Forces static export
  trailingSlash: true, // ✅ Fixes routing issues
  basePath: "",
  assetPrefix: "/", // ✅ Fix for username.github.io (no repo name)
  images: { unoptimized: true }, // ✅ Fixes next/image on GitHub Pages
};

export default nextConfig;
