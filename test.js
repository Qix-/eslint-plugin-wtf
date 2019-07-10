const {Linter} = require('eslint');

function rule(name, spec) {
	const linter = new Linter();

	linter.defineRule(name, {
		create: require(`./lib/${name}`)
	});

	const lintOpts = spec.opts || {
		parserOptions: { ecmaVersion: 2015 },
		rules: {[name]: 'error'}
	};

	spec.valid.forEach(code => {
		exports[`\x1b[36m${name}\x1b[39m :: \x1b[32mOK\x1b[39m :: ${code}`] = () => {
			const result = linter.verify(code, lintOpts);

			if (result.length !== 0) {
				const err = new Error('valid code failed');
				err.expected = {pass: code};
				err.actual = result;
				throw err;
			}
		}
	});

	spec.invalid.forEach(code => {
		exports[`\x1b[36m${name}\x1b[m :: \x1b[31mWTF\x1b[39m :: ${code}`] = () => {
			const result = linter.verify(code, lintOpts);

			if (result.length === 0) {
				const err = new Error('invalid code passed validation');
				err.expected = {fail: code};
				err.actual = result;
				throw err;
			}

			if (result.length > 1) {
				const err = new Error('invalid code failed with multiple errors');
				err.expected = {fail: code};
				err.actual = result;
				throw err;
			}

			// only 1 error code
			if (result[0].ruleId !== name) {
				const err = new Error('code failed with wrong rule');
				err.expected = {failWith: name};
				err.actual = result;
				throw err;
			}
		}
	});
}

rule('no-single-element-literal-array-includes', {
	valid: [
		`foo()`,
		`['foo', 'bar'].includes('foo')`
	],
	invalid: [
		`['foo'].includes('foo')`
	]
});

rule('no-condexpr-statements', {
	valid: [
		`foo()`,
		`if (foo) bar();`,
		`if (foo) bar(); else qux();`,
		`const a = foo || bar;`,
		`() => foo && bar()`
	],
	invalid: [
		`foo && bar();`,
		`foo || bar();`,
		`foo && bar && (a = 10);`,
		`foo ? bar() : (a = 10);`,
		`true ? bar() : null`
	]
});
