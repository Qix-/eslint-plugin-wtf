// eslint-plugin-noob

module.exports = {
	rules: {},
	configs: {
		noob: {
			plugins: ['noob'],
			rules: {}
		}
	}
};

[
	'no-single-element-literal-array-includes'
].forEach(name => {
	module.exports.rules[name] = require(`./lib/${name}`);
	module.exports.configs.noob.rules[name] = 'error';
});
