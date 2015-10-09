# babel-plugin-remove-proptypes

Babel plugin for removing static declarations of React `propTypes` on classes.

Input:
```js
// MyComponent extends React.Component
MyComponent.propTypes = {
  someString: React.PropTypes.string.isRequired,
  someBoolean: React.PropTypes.bool
};
```
Output:
```js
// Does not contain any propTypes declarations
```

The plugin can be used to remove PropTypes from production environments, where they have no effect.

## Installation

```sh
$ npm install babel-plugin-remove-proptypes
```

## Usage

### Via `.babelrc`

```json
{
  "plugins": ["remove-proptypes"]
}
```

### Via CLI

```sh
$ babel --plugins remove-proptypes script.js
```

### Via Node API

```js
require('babel-core').transform('code', {
  plugins: ['remove-proptypes']
});
```