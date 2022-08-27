import rehypeHighlight from 'rehype-highlight';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkFrontmatter from 'remark-frontmatter'
import remarkExtractFrontmatter from 'remark-extract-frontmatter'

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkUnwrapImages, remarkFrontmatter, remarkExtractFrontmatter],
            rehypePlugins: [rehypeHighlight],
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['picsum.photos', 'images.unsplash.com']
  },
  experimental: { images: { allowFutureImage: true } }
};

export default nextConfig;
