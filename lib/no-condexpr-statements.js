module.exports = ctx => ({
	ExpressionStatement(node) {
		const expr = node.expression;
		if (expr.type !== 'LogicalExpression' && expr.type !== 'ConditionalExpression') return;

		ctx.report(node, "Don't use conditional logic in lieu of `if` statements");
	}
});
