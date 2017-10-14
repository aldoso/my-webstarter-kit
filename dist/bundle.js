//injecting sass directly into js not html
// require('../styles/style.sass')

const component = require('./component')

document.write( `Hello, ${component}!` )
console.log('this is app.js')

module.exports = 'it works'
console.log('this is component.js')
