const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// helps to change the public path dynamically
const code_mode = "development";






module.exports = {
    mode : code_mode,




    entry : { bundle: path.resolve( __dirname, "src/index.js" ) },
    output :
    {
        path : path.resolve( __dirname, "dist" ),
        filename: "[name][contenthash].js",
        clean: true,
        assetModuleFilename: "[name][ext]", 

        // tells the server where to serve the bundled files
        // in development mode, the dev server takes files from memory, so need to point to root
        // in production mode, such as GitHub Pages, need to point towards the repository name
        publicPath: code_mode == "development" ? "/" : "/PortfolioV2/"




    },




    devServer: {
        static:{
            directory: path.resolve(__dirname, "dist")
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },




    module : {




        // this is the loaders, in this case we are using css-loader and sass-loader
        rules:
        [
            {
            // this means that any file that ends with .scss will use the scss loader
            test: /\.css$/,
            use: ["style-loader", "css-loader" , "postcss-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.pdf$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]', // Save PDFs in 'assets' directory
                },
            },




        ]
    },




    plugins : [
        new HtmlWebpackPlugin(
            {
                title: "Webpack App",
                filename: "index.html",
                template: path.resolve( __dirname, "src/template.html" )
               
            }
        ),
        new HtmlWebpackPlugin
        (
            {
            title: "404 - Not Found",
            filename: "404.html",
            template: path.resolve(__dirname, "src/template.html"),
        
            }
        )
    ]
}






