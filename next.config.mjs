import rehypeHighlight from 'rehype-highlight';
import remarkUnwrapImages from 'remark-unwrap-images';

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
            remarkPlugins: [remarkUnwrapImages],
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
    loader: 'imgix',
    path: 'https://images.unsplash.com/',
  },
};

export default nextConfig;
