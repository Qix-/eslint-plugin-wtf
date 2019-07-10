// eslint-plugin-noob

module.exports = {
	rules: {},
	configs: {
		strict: {
			plugins: ['noob'],
			rules: {}
		}
	}
};

[
	'no-single-element-literal-array-includes'
].forEach(name => {
	module.exports.rules[name] = require(`./lib/${name}`);
	module.exports.configs.strict.rules[`noob/${name}`] = 'error';
});
