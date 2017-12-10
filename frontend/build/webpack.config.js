'use strict';

var webpack = require('webpack');

var config = {
    "context": "C:\\Users\\Admin\\Documents\\Projektit\\eclipse\\kotlin-fullstack-sample-master\\frontend\\build\\js\\min",
    "entry": {
        "frontend": "./frontend"
    },
    "output": {
        "path": "C:\\Users\\Admin\\Documents\\Projektit\\eclipse\\kotlin-fullstack-sample-master\\frontend\\build\\bundle",
        "filename": "[name].bundle.js",
        "chunkFilename": "[id].bundle.js",
        "publicPath": "/frontend/"
    },
    "module": {
        "rules": [
            
        ]
    },
    "resolve": {
        "modules": [
            "js\\min",
            "js\\resources",
            "node_modules",
            "C:\\Users\\Admin\\Documents\\Projektit\\eclipse\\kotlin-fullstack-sample-master\\frontend\\build\\node_modules"
        ]
    },
    "plugins": [
        
    ]
};

module.exports = config;

// from file C:\Users\Admin\Documents\Projektit\eclipse\kotlin-fullstack-sample-master\frontend\webpack.config.d\babel.js
config.module.rules.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
});

// from file C:\Users\Admin\Documents\Projektit\eclipse\kotlin-fullstack-sample-master\frontend\webpack.config.d\css.js
config.module.rules.push(
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    }
);


// from file C:\Users\Admin\Documents\Projektit\eclipse\kotlin-fullstack-sample-master\frontend\webpack.config.d\minify.js
// config.plugins.push(new webpack.optimize.UglifyJsPlugin({
//     minimize: true
// })); 

