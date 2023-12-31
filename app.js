const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');

const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'express_db'
});

// cssファイルの取得
app.use(express.static('assets'));

// mysqlからデータを持ってくる
app.get('/', (req, res) => {
  const sql = "select * from clients";

  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.render('index', {
      users: result
    });
  });
});

app.get('/user-details/:id', (req, res) => {
  const sql = "SELECT * FROM userDetails WHERE id = ?";

  con.query(sql, [req.params.id], function (err, result, fields) {
    if (err) throw err;
    res.render('user-details', {
      users: result
    });
  });
});


app.post('/', (req, res) => {
  const sql = "INSERT INTO clients SET ?"
  con.query(sql, req.body, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.redirect('/');
  });
});


app.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/form.html'))
});

app.get('/edit/:id', (req, res) => {
  const sql = "SELECT * FROM clients WHERE id = ?";
  con.query(sql, [req.params.id], function (err, result, fields) {
    if (err) throw err;
    res.render('edit', {
      user: result
    });
  });
});


app.post('/update/:id', (req, res) => {
  console.log(req.params.id);
  const sql = "UPDATE clients SET ? WHERE id = " + req.params.id;
  con.query(sql, req.body, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.redirect('/');
  });
});


app.get('/delete/:id', (req, res) => {
  const sql = "DELETE FROM clients WHERE id = ?";
  con.query(
    sql, [req.params.id],
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.redirect('/');
    });
});

//利用者データ
// const users = [
  // {
  //   id: 1,
  //   name: "山田太郎",
  //   name_kana: "やまだ たろう",
  //   disease: "脳卒中 (Stroke)",
  //   medicalHistory: "太郎さんは2年前に脳卒中を経験しました。入院し、脳卒中の後遺症として右半身麻痺が残りました。数週間の入院後、リハビリテーションプログラムを開始し、物理療法、作業療法、言語療法を受けました。退院後もリハビリを継続しています。",
  //   goals: "太郎さんの目標は、右半身の機能を回復させることです。リハビリテーションを通じて、歩行や手の動きの改善、日常生活動作の自立を目指しています。",
  //   family: "太郎さんには妻と高校生の娘がいます。家族全体で彼の回復をサポートし、理解と励ましを提供しています。",
  //   other: "太郎さんは脳卒中以外に特定の既往歴はありません。"
  // },
  // {
  //   id: 2,
  //   name: "鈴木真理子",
  //   name_kana: "すずき まりこ",
  //   disease: "脊髄損傷 (Spinal Cord Injury)",
  //   medicalHistory: "真理子さんは交通事故により、一年前に脊髄損傷を負いました。入院し、手術を受けた後、リハビリテーションプログラムが開始されました。現在は車椅子での生活となっています。",
  //   goals: "真理子さんの目標は、脊髄損傷による身体的な制約を最小限に抑えることです。リハビリテーションを通じて、上肢や下肢の筋力を回復させ、日常生活動作の自立を目指しています。",
  //   family: "真理子さんは独身で、親族や友人によるサポートを受けています。",
  //   other: "真理子さんは脊髄損傷以外に特定の既往歴はありません。"
  // },
  //   {
  //   id: 3,
  //   name: "佐藤雅子",
  //   name_kana: "さとう みやこ",
  //   disease: "骨折後のリハビリ (Rehabilitation after Fracture)",
  //   medicalHistory: "雅子さんは3か月前にスキー中に足を骨折しました。骨折した足は手術により固定され、リハビリテーションプログラムが開始されました。現在は歩行能力の回復に取り組んでいます。",
  //   goals: "雅子さんの目標は、骨折した足の機能を回復させ、通常の日常生活に戻ることです。リハビリテーションを通じて、歩行や足の可動域の改善を目指しています。",
  //   family: "雅子さんには両親と弟がいます。家族全体で彼女のリハビリプログラムをサポートし、励まし合っています。",
  //   other: "雅子さんは骨折以外に特定の既往歴はありません。"
  // },
  // {
  //   id: 4,
  //   name: "田中美智子 ",
  //   name_kana: "たなか みちこ",
  //   disease: "脳外傷 (Traumatic Brain Injury)",
  //   medicalHistory: "美智子 さんは半年前に交通事故で頭部を強打し、脳外傷を負いました。入院し、手術や集中治療を受けた後、リハビリテーションプログラムが開始されました。認知機能や運動機能の回復に取り組んでいます。",
  //   goals: "美智子さんの目標は、脳外傷による機能の回復と社会復帰です。リハビリテーションを通じて、日常生活動作の自立や職場復帰を目指しています。",
  //   family: "美智子さんには妻と大学生の子供がいます。家族全体で彼の回復をサポートし、理解と忍耐を提供しています。",
  //   other: "美智子さんは脳外傷以外に特定の既往歴はありません。"
  // },
  // {
  //   id: 5,
  //   name: "中村健太",
  //   name_kana: "なかむら けんた",
  //   disease: "脊髄損傷 (Spinal Cord Injury)",
  //   medicalHistory: "健太さんは半年前に膝関節置換術を受けました。手術後、リハビリテーションプログラムが開始され、筋力トレーニングや関節可動域の改善に取り組んでいます。",
  //   goals: "健太さんの目標は、膝関節の機能を回復させ、痛みの軽減と日常生活への復帰です。リハビリテーションを通じて、歩行能力や階段の上り下りなどの動作の改善を目指しています。",
  //   family: "健太さんには夫と社会人の娘がいます。家族全体で彼のリハビリプログラムをサポートし、励まし合っています。",
  //   other: "健太さんは膝関節置換術以外に特定の既往歴はありません。"
  // },
  // {
  //   id: 6,
  //   name: "小林裕子",
  //   name_kana: "こばやし ゆうこ",
  //   disease: "脊椎損傷 (Spinal Cord Injury)",
  //   medicalHistory: "裕子さんはスポーツ中の事故で脊椎損傷を負いました。現在、下半身麻痺が残っており、リハビリテーションプログラムに参加しています。",
  //   goals: "裕子さんの目標は、脊椎損傷による制約を最小限に抑え、日常生活動作の自立を目指すことです。リハビリテーションを通じて、上肢の筋力強化や車椅子の操作などに取り組んでいます。",
  //   family: "裕子さんは独身ですが、親族や友人によるサポートを受けています。",
  //   other: "裕子さんは脊椎損傷以外に特定の既往歴はありません。"
  // },
  // {
  //   id: 7,
  //   name: "渡辺健二",
  //   name_kana: "わたなべ けんじ",
  //   disease: "大腿骨骨折後のリハビリ (Rehabilitation after Femoral Fracture)",
  //   medicalHistory: "健二さんは1年前に大腿骨を骨折し、手術を受けました。リハビリテーションプログラムに参加し、歩行能力の回復や筋力トレーニングに取り組んでいます。",
  //   goals: "健二さんの目標は、骨折した足の機能を回復させ、通常の日常生活に戻ることです。リハビリテーションを通じて、歩行や足の筋力の向上を目指しています。",
  //   family: "健二さんには妻がいます。家族全体で彼のリハビリプログラムをサポートし、励まし合っています。",
  //   other: "健二さんは大腿骨骨折以外に特定の既往歴はありません。。"
  // },
  // {
  //   id: 8,
  //   name: "松本美晴",
  //   name_kana: "まつもと みはる",
  //   disease: "脳梗塞 (Cerebral Infarction)",
  //   medicalHistory: "美晴さんは1年前に脳梗塞を発症しました。リハビリテーションプログラムに参加し、言語療法や運動療法に取り組んでいます。",
  //   goals: "美晴さんの目標は、脳梗塞による言語や運動機能の回復です。リハビリテーションを通じて、言葉の理解や発話能力の向上、歩行や手の動きの改善を目指しています。",
  //   family: "美晴さんには夫と大学生の子供がいます。家族全体で彼女の回復をサポートし、理解と励ましを提供しています。",
  //   other: "美晴さんは脳梗塞以外に特定の既往歴はありません。"
  // },
  // {
  //   id: 9,
  //   name: "高橋健一",
  //   name_kana: "たかはし けんいち",
  //   disease: "脊柱側弯症 (Scoliosis)",
  //   medicalHistory: "健一さんは脊柱側弯症の診断を受けました。リハビリテーションプログラムに参加し、姿勢の改善や筋力トレーニングに取り組んでいます。",
  //   goals: "健一さんの目標は、脊柱側弯症による姿勢の歪みを改善することです。リハビリテーションを通じて、姿勢の矯正や背筋の強化を目指しています。",
  //   family: "健一さんには両親と兄弟がいます。家族全体で彼のリハビリプログラムをサポートし、理解と応援を提供しています。",
  //   other: "健一さんは脊柱側弯症以外に特定の既往歴はありません。"
  // },
  // {
  //   id: 10,
  //   name: "斉藤雅子",
  //   name_kana: "さいとう みやこ",
  //   disease: "脊柱側弯症 (Scoliosis)",
  //   medicalHistory: "雅子さんは10代の頃から脊柱側弯症の症状を抱えています。過去には軽度の矯正具を使用してきましたが、最近症状が悪化し、専門医による詳しい検査と診断を受けました。美咲さんはリハビリテーションプログラムに参加し、姿勢の改善や筋力トレーニングに取り組んでいます。",
  //   goals: "雅子さんの目標は、脊柱側弯症による姿勢の歪みを軽減することです。仕事上、子供たちの前での姿勢や体の使い方が重要なため、リハビリテーションを通じて姿勢の矯正や筋力の強化を目指しています。",
  //   family: "雅子さんには夫と2人の子供がいます。家族全体で彼女のリハビリプログラムをサポートし、理解と応援を提供しています。特に夫は彼女の姿勢改善のためのエクササイズや家事のサポートをしています。",
  //   other: "雅子さんは脊柱側弯症以外に特定の既往歴はありません。彼女は健康に気を使っており、脊柱側弯症の管理に真剣に取り組んでいます。"
  // }
// ];

app.listen(port, () => console.log(`Example app listening on port ${port}!`));