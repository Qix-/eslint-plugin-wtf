module.exports = ctx => ({
	IfStatement(node) {
		if (!node.consequent) return;
		if (node.consequent.type === 'EmptyStatement' || node.consequent.body.length === 0) {
			if (node.alternate && node.alternate.type !== 'EmptyStatement') {
				ctx.report(node.consequent, "Empty consequent if clause; invert the if statement");
			} else {
				ctx.report(node, "Useless if clause; no alternate (else)");
			}
		}
	}
});
