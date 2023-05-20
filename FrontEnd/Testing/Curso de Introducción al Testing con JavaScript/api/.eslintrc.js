module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        indent: ['error', 4],
        'object-curly-spacing': ['error', 'always'],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
        'implicit-arrow-linebreak': ['error', 'below'],
    },
};
