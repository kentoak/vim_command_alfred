#!/usr/bin/env node
import alfy from 'alfy';

//argはエンターキーを押した時にでるやつ


const command_=`
:!wc -m  バッファ内の文字数をカウントする
.   直前のコマンドを実行
^	現在行の行頭の空白を飛ばした先頭文字列に移動
0	現在行の行頭に移動
$	現在行の行末に移動
G	ファイルの最終行へ移動
gg	ファイルの先頭行へ移動
+	次行頭の空白を飛ばした先頭文字列に移動
-	前行頭の空白を飛ばした先頭文字列に移動
[Enter]	 次行の先頭位置へ移動
[数字]$	 (数字-1)行下の行末に移動
[数字]G	 (数字)行の行頭に移動
[数字]+	 (数字)行下の空白を飛ばした先頭文字列に移動
[数字]-	 (数字)行上の空白を飛ばした先頭文字列に移動
[数字][Enter]	(数字)行下の行頭へ移動
:[数字]	(数字)行へ移動
w	1ワード次へ移動
b	1ワード前へ移動
e	単語の末尾へ移動（すでに単語末尾なら次の単語の末尾へ）
[数字]w	(数字)word分次へ移動
[数字]b	(数字)word分前へ移動
[数字]e	(数字)word分次の単語の末尾へ移動
(	文頭（ブロック単位）に移動
)	次文頭（ブロック単位）に移動
{	前段落に移動
}	次段落に移動
H	カーソルを画面先頭へ移動
M	カーソルを画面中央へ移動
L	カーソルを画面最終行へ移動
[Ctrl]+D	カーソルを1/2画面下へ移動
[Ctrl]+U	カーソルを1/2画面上へ移動
[Ctrl]+F	カーソルを1画面下へ移動
[Ctrl]+B	カーソルを1画面上へ移動
[Ctrl]+n	補完
[Ctrl]+p	前候補を検索
[Ctrl]+n	次候補を検索
[数字]H	カーソルを画面先頭から(数字)行目へ移動
[数字]L	カーソルを画面最終行から(数字)行目へ移動
[数字][Ctrl]+D	カーソルを(数字)行下へ移動
[数字][Ctrl]+U	カーソルを(数字)行上へ移動
[数字][Ctrl]+F	カーソルを(数字)画面下へ移動
[数字][Ctrl]+B	カーソルを(数字)画面上へ移動
z[Enter]	現在のカーソル位置が画面のトップになるようにスクロール
zz	    現在のカーソル位置が画面の中央になるようにスクロール
i	    カーソルの左から入力開始
I	    行頭から入力開始
a	    カーソルの右から入力開始
A	    行末から入力開始
o	    カーソル行の下に空行を挿入し、その行頭から入力開始
O	    カーソル行の上に空行を挿入し、その行頭から入力開始
R	    カーソルから上書きで入力開始
s	    カーソル位置の一文字を削除して入力開始
S	    カーソル位置の行を削除して入力開始
cl	    カーソル位置の一文字を削除して入力開始
cc	    カーソル位置の行を削除して入力開始
c^	    カーソル位置の直前から行頭の空白を飛ばした先頭文字列まで削除して入力開始
c0	    カーソル位置の直前から行頭まで削除して入力開始
c$	    カーソル位置から行末まで削除して入力開始
cG	    カーソル位置の行から文末まで削除して入力開始
cw	    カーソル位置から次ワードの直前まで削除して入力開始
cb	    カーソル位置からワードの先頭まで削除して入力開始
ce	    カーソル位置からワードの最後まで削除して入力開始
cW	    カーソル位置から区切り文字を飛ばして次ワードの直前まで削除して入力開始
[Esc]	コマンドモードへ移行
x	    カーソル位置の一文字を削除
dl	    カーソル位置の一文字を削除
dd	    カーソル位置の行を削除
d^	    カーソル位置の直前から行頭の空白を飛ばした先頭文字列まで削除
d0	    カーソル位置の直前から行頭まで削除
d$	    カーソル位置から行末まで削除
dG	    カーソル位置の行から文末まで削除
dw	    カーソル位置から次ワードの直前まで削除
db	    カーソル位置からワードの先頭まで削除
de	    カーソル位置からワードの最後まで削除
dW	    カーソル位置から区切り文字を飛ばして次ワードの直前まで削除
diw     カーソル上の単語を削除
di"     ダブルクォーテーションの内部を削除
dit     HTMLタグの内部を削除
yl	    カーソル位置の一文字をコピー
yy	    カーソル位置の行をコピー
y^	    カーソル位置の直前から行頭の空白を飛ばした先頭文字列までコピー
y0	    カーソル位置の直前から行頭までコピー
y$	    カーソル位置から行末までコピー
yG	    カーソル位置の行から文末までコピー
yw	    カーソル位置から次ワードの直前までコピー
yb	    カーソル位置からワードの先頭までコピー
ye	    カーソル位置からワードの最後までコピー
yW	    カーソル位置から区切り文字を飛ばして次ワードの直前までコピー
yiw     カーソル上の単語をコピー
yi"     ダブルクォーテーションの内部をコピー
yit HTMLタグの内部をコピー
p	コピーした内容をカーソルの後にペースト
P	コピーした内容をカーソルの前にペースト
u	undo（直前の編集作業の取り消し）
[Ctrl]+r	redo（undoの取り消し）
/文字列+[Enter]	カーソルの後方に文字列を検索
?文字列+[Enter]	カーソルの前方に文字列を検索
n	次の検索該当文字列へ移動
N	前の検索該当文字列へ移動
/+[Enter]	次の検索該当文字列へ移動
?+[Enter]	前の検索該当文字列へ移動
r[文字]	カーソルの1文字を入力した文字に置換
[数字]r	カーソルから数字分の文字を入力した文字で置換
:s/文字列1/文字列2/[Enter]	カーソル行の最初の「文字列1」のみを「文字列2」に置換
:s/文字列1/文字列2/g[Enter]	カーソル行の「文字列1」を全て「文字列2」に置換
:s/文字列1/文字列2/c[Enter]	カーソル行の最初の「文字列1」を「文字列2」に置換（確認有り）
:[行数]s/文字列1/文字列2/[Enter]	指定行で最初の「文字列1」のみを「文字列2」に置換
:[行数]s/文字列1/文字列2/g[Enter]	指定行で「文字列1」を全て「文字列2」に置換
:%s/文字列1/文字列2/g[Enter]	全ての行で「文字列1」を全て「文字列2」に置換
:[開始行],[終了行]s/文字列1/文字列2/[Enter]	指定範囲行内で各行の最初の「文字列1」を「文字列2」に置換
:[開始行],[終了行]s/文字列1/文字列2/g[Enter]	指定範囲行内の「文字列1」を全て「文字列2」に置換
:[開始行],$s/文字列1/文字列2/g[Enter]	指定開始行から最終行までの「文字列1」を全て「文字列2」に置換
&	直前のsコマンドの繰り返し
:&[Enter]	直前のsコマンドの繰り返し
~	カーソルの文字を小文字から大文字、大文字から小文字に変換
[数字]~	カーソルから指定文字数分の文字を小文字から大文字、大文字から小文字に変換
J	現在行と直下の行の改行をスペースに置換
[数字]J	現在行から指定行数分下の行の改行をスペースに置換
:w[Enter]	上書き保存
:w![Enter]	強制上書き保存
:w ファイル名[Enter]	ファイル名で保存
:w! ファイル名[Enter]	ファイル名で強制保存
:[開始行],[終了行] w[Enter]	開始行から終了行までを保存
:wq[Enter]	上書き保存して終了
:q[Enter]	終了
:q![Enter]	保存せずに終了
:e[Enter]	現在開いているファイルを再度読込み
:e![Enter]	現在開いているファイルを強制的に再度読込み
:e ファイル名[Enter]	ファイルを編集用に読込み
:e! ファイル名[Enter]	ファイルを編集用に強制的に読込み
:e ++enc=euc-jp[Enter]	文字コードをeuc-jpに設定
:e ++enc=shift_jis[Enter]	文字コードをshift_jisに設定
:e ++enc=utf-8[Enter]	文字コードをutf-8に設定
:e ++ff=dos[Enter]	    文字コードをdos（CR+LF）に設定
:e ++ff=mac[Enter]	    文字コードをmac（CR）に設定
:e ++ff=unix[Enter]	    文字コードをunix（LF）に設定
:set number[Enter]	    行番号を表示
:set nonumber[Enter]	行番号を非表示
:set all[Enter]	        すべてのオプションを表示
:set fenc?[Enter]	    ファイルエンコードの確認
:set ff?[Enter]	        改行コードの確認
:r[Enter]	カーソル行の直下に現在のファイルの内容を挿入
:r ファイル名[Enter]	カーソル行の直下にファイルの内容を挿入
:r! コマンド[Enter]	カーソル行の直下にシェルコマンドの結果を挿入
`

// 改行で配列を作る
const lines = command_.split('\n');
let words = [];
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  let line_words = line.split(/\s+/);
  let line_words_with_space = [];
  if (line_words.length > 2) {
    let tmp = [line_words.slice(0, -1).join(" "), line_words.slice(-1)[0]];
    line_words_with_space.push(tmp);
  } else {
    line_words_with_space.push(line_words);
  }
  words.push(line_words_with_space[0]);
}

// 正規表現を使って空白で配列の要素にする
//const commands = lines.map(line => line.split(/\s+/));
//const commands = lines.map(line => line.split(/\s+/));
//const tmp = commands.slice(1, -1)
const tmp = words.slice(1, -1)
var obj=[]

for(var i=0;i<tmp.length;i++){
  obj.push({
    title: tmp[i][0],
    subtitle: tmp[i][1],
    icon: {path: './img/main01.jpg'},
    arg: tmp[i][0]});
};

const keyword = alfy.input;
if (process.argv.length==0){
  alfy.output(obj);
}else if (process.argv.length==3){
  const itemss = alfy.inputMatches(obj,'title');
  alfy.output(itemss);
}else{
  console.log("bashcom {query}")
}

export {obj as obj};
