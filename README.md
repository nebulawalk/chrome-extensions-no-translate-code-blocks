# No Translate Code Blocks

この Chrome 拡張機能は、コードブロックが翻訳されるのを防ぎます。

## インストール方法

1. このリポジトリをクローンします:
   ```sh
   git clone https://github.com/nebulawalk/chrome-extensions-no-translate-code-block.git
   ```
2. Chrome で拡張機能の管理ページを開きます (`chrome://extensions/`)。
3. 右上の「デベロッパーモード」をオンにします。
4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、クローンしたリポジトリのフォルダを選択します。

## 使用方法

この拡張機能は、ページ上のすべてのコードブロックに対して自動的に適用されます。コードブロックに `notranslate` クラスを追加し、翻訳されないようにします。
