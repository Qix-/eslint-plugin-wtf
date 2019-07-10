module.exports = {
	rules: {},
	configs: {
		strict: {
			plugins: ['wtf'],
			rules: {}
		}
	}
};

[
	'no-single-element-literal-array-includes'
].forEach(name => {
	module.exports.rules[name] = require(`./lib/${name}`);
	module.exports.configs.strict.rules[`wtf/${name}`] = 'error';
});
