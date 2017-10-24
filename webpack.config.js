const path = require('path');

module.exports = {
	entry: ['./app/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
	  rules: [
	    { 
	      test: /\.js$/, 
	      exclude: /node_modules/, 
	      loader: "babel-loader" 
	    }
	  ]
	},
	devServer:{
		port:3000,
		contentBase :'./build',
		inline:true,
	}
};