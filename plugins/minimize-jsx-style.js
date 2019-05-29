module.exports = ({types: t}) => {
	return {
		visitor: {
			/*JSXOpeningElement(path) {
				const tag = path.node.name.name;
				if (tag === "style") {
					var style = path.parentPath.node.children[0].expression.quasis[0].value.raw;
					style = style.replace(/\n|\t/g, "");
					path.parentPath.replaceWith(
						t.JSXElement(
							t.JSXOpeningElement(
								t.JSXIdentifier("style"),
								[t.JSXAttribute(t.JSXIdentifier("jsx"))]
							),
							t.JSXClosingElement(
								t.JSXIdentifier("style")
							),
							[
								t.JSXExpressionContainer(
									t.TemplateLiteral(
										[t.TemplateElement(t.StringLiteral(style))],
										[]
									)
								)
							]
						)
					)
				}
			}*/
			StringLiteral(path) {
				const {parentPath} = path;
				if (parentPath.node) {
					const {arguments} = parentPath.node;
					if (arguments) {
						if (arguments[0].value === "style") {
							const {value} = path.node;
							if (value !== "style") {
								const St = t.StringLiteral("Hola Mundo")
								/*path.parentPath.replaceWith(
									t.CallExpression(
										t.MemberExpression(
											t.Identifier("React"),
											t.Identifier("createElement")
										),
										[
											t.StringLiteral("style"),

										]
									)
								)*/
								console.log(path.parentPath.node.arguments[1])
							}
						}
						
					}	
				}
			}
		}
	}
}