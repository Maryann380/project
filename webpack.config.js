//node.js helper function:
const path = require("path");
const ExamplePluggin = require("./Examplepluggin");
// const webpack = require("webpack");

module.exports ={
    entry: "./src/index.js",
    mode: 'production',

    output:{
        filename: "bundle.js",
        path: path.join(__dirname,"dist") //we are joining our tells it what path to output
        },
    
    //here we are allowing the webpack to manage every asset even if they are not bundled together
        module:{
            rules:[
                {
                    // all cases have 2objects 
                    //test tells webpack when i come across a file before it is added to the dependancy graph match against this regular expression and perform a certain transform;
                    test: /\.js$/,
                    //a babel-loader is an example of transform loader
                    use: "file-loader"
                },
                {
                    //loaders functionally transforms thereselves from right to left
                    test:/\.css$/,
                    use:[
                        {loader:"style-loader"},
                        {loader:"css-loader"}
                    ]
                },
                {
                    //loaders functionally transforms thereselves from right to left
                    test:/\.jpeg$/,
                    use:[
                        "file-loader",
                        {
                            loader: "url-loader",options:{
                            limit:1000
                        }}
                    ]
                },
            ],
                // plugins: [ 
                //     new Examplepluggin(),
                // ],
            }
        };