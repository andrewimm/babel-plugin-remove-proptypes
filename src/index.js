export default function({ Plugin, types: t }) {
  return new Plugin('remove-proptypes', {
    visitor: {
      AssignmentExpression: function AssignmentExpression(node, parent) {
        if (t.isMemberExpression(node.left) &&
            t.isIdentifier(node.left.property, { name: 'propTypes' }) &&
            t.isObjectExpression(node.right)) {
          this.dangerouslyRemove();
        }
      }
    }
  });
}
