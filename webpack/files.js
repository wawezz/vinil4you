module.exports = function () {
    return {
        module: {
            rules: [{
                    test: /\.(jpg|jpeg|png|svg|gif)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    },
                },
                {
                    test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                    loader: "file-loader",
                    options: {
                        name: "files/fonts/[name].[ext]"
                    }
                },
            ],
        },
    };
};