import axios from 'axios'
import path from 'path'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

// Paths Aliases defined through tsconfig.json
const typescriptWebpackPaths = require('./webpack.config.js')

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    )
    return [
      {
        component: 'src/containers/Home',
        path: '/',
      },
      {
        component: 'src/containers/About',
        path: '/about',
      },
      {
        children: posts.map(post => ({
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
          path: `/post/${post.id}`,
        })),
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        path: '/blog',
      },
      {
        component: 'src/containers/404',
        is404: true,
      },
    ]
  },
  getSiteData: () => ({
    title: 'React Static',
  }),
  webpack: (config, { defaultLoaders }) => {
    // Add .ts and .tsx extension to resolver
    config.resolve.extensions.push('.ts', '.tsx')

    // Add TypeScript Path Mappings (from tsconfig via webpack.config.js)
    // to react-statics alias resolution
    config.resolve.alias = typescriptWebpackPaths.resolve.alias

    // We replace the existing JS rule with one, that allows us to use
    // both TypeScript and JavaScript interchangeably
    config.module.rules = [
      {
        oneOf: [
          {
            exclude: defaultLoaders.jsLoader.exclude, // as std jsLoader exclude
            test: /\.(js|jsx|ts|tsx)$/,
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: require.resolve('ts-loader'),
                options: {
                  transpileOnly: true,
                },
              },
            ],
          },
          defaultLoaders.cssLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]

    config.plugins = (config.plugins || []).concat([
      new ForkTsCheckerWebpackPlugin({
        tsconfig: path.join(__dirname, './tsconfig.json'),
        tslint: path.join(__dirname, './tslint.json'),
      }),
    ])

    return config
  },
}
