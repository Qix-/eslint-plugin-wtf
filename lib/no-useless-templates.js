module.exports = ctx => ({
	TemplateLiteral(node) {
		if (node.parent && node.parent.type === 'TaggedTemplateExpression') {
			return;
		}

		if (node.expressions.length === 1
		    && node.quasis.length === 2
		    && node.quasis[0].value.raw === ''
		    && node.quasis[1].value.raw === '')
		{
			ctx.report(node, "Useless template interpolation; just use the value or String(value)");
		}
	}
});
