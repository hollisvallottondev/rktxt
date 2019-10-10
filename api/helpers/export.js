// const requireModule = require.context('.', false, /\.js$/)
const exportFunc = () => {
    let mutations = {};
    fs.readdirSync(__dirname).forEach(function ( fileName) {
        if (fileName === 'index.js') return
            mutations = {
                ...mutations,
                ...require('./' + fileName)
            }
        });
    return mutations; 
}