module.exports = ctx => ({
	CallExpression(node) {
		const callee = node.callee;
		if (callee.type !== 'MemberExpression') return;
		if (callee.property.name !== 'includes') return;
		if (callee.object.type !== 'ArrayExpression') return;
		if (callee.object.elements.length !== 1) return;

		ctx.report(node, "Don't use Array.includes() with a single element; use === instead");
	}
});
