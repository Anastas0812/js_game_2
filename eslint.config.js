import js from "@eslint/js";
import jest from "eslint-plugin-jest";

export default [
  {
    ignores: ["node_modules", "dist"],
  },
  js.configs.recommended,
  {
    files: ["**/__tests__/**/*.js"], // применяем только к тестам
    plugins: { jest },
    languageOptions: {
      globals: {
        test: true,
        expect: true,
        describe: true,
        beforeEach: true,
        afterEach: true,
        jest: true,
        beforeAll: true,
        it: true,
      },
    },
    rules: {
      ...jest.configs.recommended.rules, // включаем правила jest
    },
  },
];
