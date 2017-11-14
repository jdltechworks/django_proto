import { join, resolve } from 'path'
import merge from 'webpack-merge'
import { output_paths } from './base'

const rules =[
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'sass-loader'}
        ]
    }
]

export default ({env, options}) => {
    const strategy = {
        entry: '',
        output: ''
    }
    return merge.strategy(strategy)({
        output: {
          path: output_paths.development,
          filename: 'app.js'
        },
        module: {
          rules: [
            { test: /\.js$/, use: 'babel-loader' }
          ]
        },
        plugins: [
        ]
    })
}
