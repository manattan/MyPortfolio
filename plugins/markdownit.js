import MarkdownIt from "markdown-it";
import mdAnchor from "markdown-it-anchor";
import mdTOC from "markdown-it-table-of-contents";

const md = new MarkdownIt({
  injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
  breaks: true, // 改行コードを<br>に変換する
  html: true, // HTML タグを有効にする
  linkify: true, // URLに似たテキストをリンクに自動変換する
  typography: true // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
});

md.use(mdAnchor);
md.use(mdTOC, {
  includeLebel: [1, 2, 3, 4],
  containerHeaderHtml: "<h2>目次</h2>"
});

export {md};
