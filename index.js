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
	'no-single-element-literal-array-includes',
	'no-condexpr-statements',
	'no-useless-templates',
	'no-empty-if-clause'
].forEach(name => {
	module.exports.rules[name] = require(`./lib/${name}`);
	module.exports.configs.strict.rules[`wtf/${name}`] = 'error';
});
