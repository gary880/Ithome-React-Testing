# Ithome 2023 鐵人賽
[React Clean Code And Unit Tests - 利用測試寫出人類看得懂的React程式 ](https://ithelp.ithome.com.tw/users/20161792/ironman/5966)



## 專案設定
環境 & 使用套件

   - react + TypeScript
   - vite
   - jest
   - React Testing Library
   - axios

安裝
```
   npm install
```

測試
```
   npm run test
```


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
