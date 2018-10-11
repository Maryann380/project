class ExamplePluggin{
    //The Apply function allows the author of the pluggin to hook into different life cycles of webpacks to perform functionalities
     apply (compiler){
        compiler.pluggin("run",(complier, callback)=> {
            console.log(`WEBPACK is running`);
            callback();
        });
    }
}
module.exports = ExamplePluggin;