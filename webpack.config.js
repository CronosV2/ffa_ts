const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const client = {
    entry: './src/client/client.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                            transpileOnly: true
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
        plugins: [new TsconfigPathsPlugin()],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'build/client'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build/client'),
        },
        hot: true,
        port: 3000,
    }
};

const server = {
    entry: './src/server/server.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'build/server'),
    },
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        client.devtool = 'source-map';
        server.devtool = 'source-map';
    }
    return [client, server];
};