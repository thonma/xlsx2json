# xlsx2json

## 環境

```bash
$ node -v
v12.18.3

$ npm -v
6.14.6

# 任意
$ yarn -v
1.13.0
```

## 使い方

```bash
$ npm install # または yarn
# script.js の CONF を適宜編集
$ node script.js # コンソール出力するとき
$ node script.js > hoge.json # ファイル出力するとき
```

## 今後の計画

- 設定値を減らす
- 設定値をコマンド引数で指定できるようにする

```bash
$ node script.js ./hoge.xlsx \
    [--sheet Sheet1] \
    [--pretty] \
    [--indent 2]
```
