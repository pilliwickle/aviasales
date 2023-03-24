module.exports = {
    "env": {
      "browser": true,
      "node": true,
      "es2021": true
    },
    "ignorePatterns": ["node_modules", "dist", "build"],
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      "plugin:import/errors",
      "plugin:import/warnings"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": ["react", "prettier", "import"],
    "rules": {
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "prettier/prettier": ["error", { "endOfLine": "auto" }],
      "linebreak-style": [0, "unix"],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "semi": ["error", "never"],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": 0,
      "import/no-unresolved": [2, { "caseSensitive": false }],
      "node/no-process-env": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "import/order": [
        2,
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always"
        }
      ]
    },
    "settings": {
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"],
          "moduleDirectory": ["node_modules", "src/"]
        }
      },
  
      "react": {
        "version": "detect"
      }
    }
  }
