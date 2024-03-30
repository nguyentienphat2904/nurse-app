const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        booking: './src/booking.js',
        treatment: './src/treatment.js',
        bill: './src/bill.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true
}
