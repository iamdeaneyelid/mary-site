module.exports = {
	plugins: {
		'postcss-flexbugs-fixes': {},
		'postcss-css-variables':{},
		'postcss-nesting': {},
		'postcss-media-minmax': {},
		'postcss-aspect-ratio-polyfill': {},
		'postcss-preset-env': {
			autoprefixer: {
				flexbox: 'no-2009',
			},
			stage: 3,
			features: {
				'custom-properties': false,
			},
		},
	},
};