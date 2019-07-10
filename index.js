module.exports = {
	rules: {}
};

[
	'no-single-element-literal-array-includes'
].forEach(name => {
	module.exports.rules[name] = require(`./lib/${name}`);
});
