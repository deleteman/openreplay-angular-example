
function createEnvPreprocessor(args, config, loger, helper) {

    return function (content, file, done) {
        console.log("preprocessor working!")
        console.log(file)
    }
}

createEnvPreprocessor.$inject = ['args', 'config.coffeePreprocessor', 'logger', 'helper']
module.exports = {
    'preprocessor:env': ['factory', createEnvPreprocessor]
}
