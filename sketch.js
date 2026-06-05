//テーマ「未来の料理」
//画像はすべてフリー素材または自作のものです
//これは実際にパナソニックが発表した未来キッチンを参考にしたものです（https://news.mynavi.jp/article/20180902-panasonic_kitchen/2）
let scene = 0;
let x1 = 50;
let y1 = 280;
let x2 = 200;
let x3 = 350;
let x4 = 500;
let y2 = 350;
let startTime;
let x5 = 320;
let y5 = 280;

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
  rectMode(CENTER);
  startTime = millis;
}

function preload() {
  room = loadImage("kitten.png");
  curry = loadImage("curry-1.png");
  burger = loadImage("hanba-gu.png");
  omurice = loadImage("omu.png");
  pasta = loadImage("pasta-1.png");
  konro = loadImage("konro.jpg");

  manaita=loadImage("25243447-removebg-preview.png")
  waku1 = loadImage("waku1.png");
  shokuzai1 = loadImage("shokuzai.png");
  omu = loadImage("omu.png");
  houtyo = loadImage("cooking_houchou_stainless.png");
  flypan = loadImage("11_9_19.png");
  shokuzai1 = loadImage("shokuzai.png");
  shokuzai1cut = loadImage("shokuzai1cut.png");
  shokuzai2cut = loadImage("shokuzai2cut.png");
  button = loadImage("button.png");
  ketya = loadImage("ketha.png");
  rice = loadImage("rice.png");
  ketyarice = loadImage("chikinrice.png");
  ketyarice2 = loadImage("24849089_2-removebg-preview.png");
  bowl = loadImage("bouruawatate-illust6.png");
  tamago = loadImage("11474.png");
  tokitamago1 = loadImage("25995198-removebg-preview.png");
  saibashi = loadImage("24319403-removebg-preview.png");
  tokitamago2 = loadImage("food_scramble_egg-removebg-preview.png");
  omufin = loadImage("kohacu.com_003387.png");
}

function draw() {
  background(255, 165, 101);
  if (scene == 0) scene0();
  if (scene == 1) scene1();
  if (scene == 2) scene2();
  if (scene == 3) scene2();
  if (scene == 4) scene3();
  if (scene == 5) scene4();
  if (scene == 6) error1();
  if (scene == 7) scene5();
  if (scene == 8) scene6();
  if (scene == 9) scene7();
  if (scene == 10) scene8();
  if (scene == 11) scene9();
  if (scene == 12) scene10();
  if (scene == 13) scene11();
  if (scene == 14) scene12();
  if (scene == 15) scene13();
  if (scene == 16) scene14();
  if (scene == 17) scene15();
  if (scene == 18) scene16();
  if (scene == 19) scene17();
  if (scene == 20) scene18();
  if (scene == 21) scene19();
  if (scene == 22) scene20();
  if (scene == 23) scene21();
  if (scene == 24) scene22();
  if (scene == 25) scene23();
  if (scene == 26) scene24();
  if (scene == 27) scene25();
  if (scene == 28) scene26();
  if (scene == 29) scene27();
  if (scene == 30) scene28();

  x1 = x1 + 2;
  if (x1 > width + 30) x1 = -60;

  x2 = x2 + 2;
  if (x2 > width + 30) x2 = -60;

  x3 = x3 + 2;
  if (x3 > width + 30) x3 = -60;

  x4 = x4 + 2;
  if (x4 > width + 30) x4 = -60;

  if (scene == 9) {
    image(shokuzai1, mouseX, mouseY, 140, 125);
  }

  if (scene == 11) {
    image(houtyo, mouseX + 30, mouseY - 30, 90, 73);
  }

  if (scene == 27) {
    image(flypan, mouseX, mouseY - 50, 100, 170);
    image(tokitamago2, mouseX, mouseY - 80, 80, 100);
  }

  if (scene == 16 && millis() - startTime > 5000) {
    scene = 17;
  }

  if (scene == 25 && millis() - startTime > 5000) {
    scene = 26;
  }
  //時間経過のプログラミングはchatgptを使用しました
}

function mousePressed() {
  if (scene != 16 && scene != 25) {
    scene++;
    startTime = millis();
  }

  if (scene == 6) {
    if (
      x1 - 20 < mouseX &&
      mouseX < x1 + 20 &&
      y1 - 20 < mouseY &&
      mouseY < y1 - 20
    ) {
      error = 1;
    } else if (
      x3 - 100 < mouseX &&
      mouseX < x3 + 100 &&
      y1 - 100 < mouseY &&
      mouseY < y1 + 100
    ) {
      scene = 8;
    }
  }
  if (scene == 10) {
    if (400 < mouseX && mouseX < 440 && 280 < mouseY && mouseY < 320) {
      scene = 11;
    }
  }

  if (scene == 12) {
    if (350 < mouseX && mouseX < 440 && 280 < mouseY && mouseY < 380) {
      scene = 13;
    }
  }

  if (scene == 15) {
    if (10 < mouseX && mouseX < 75 && 325 < mouseY && mouseY < 380) {
      scene = 16;
    }
  }

  if (scene == 19) {
    if (40 < mouseX && mouseX < 150 && 240 < mouseY && mouseY < 350) {
      scene = 20;
    }
  }

  if (scene == 22) {
    if (300 < mouseX && mouseX < 340 && 250 < mouseY && mouseY < 290) {
      scene = 23;
    }
  }

  if (scene == 24) {
    if (10 < mouseX && mouseX < 75 && 325 < mouseY && mouseY < 380) {
      scene = 25;
    }
  }

  if (scene == 28) {
    if (220 < mouseX && mouseX < 320 && 250 < mouseY && mouseY < 400) {
      scene = 29;
    }
  }

  if (scene == 7) scene = 5;
  if (scene == 10) scene = 9;
  if (scene == 12) scene = 11;
  if (scene == 15) scene = 14;
  if (scene == 19) scene = 18;
  if (scene == 22) scene = 21;
  if (scene == 24) scene = 23;
  if (scene == 28) scene = 27;
}

function scene0() {
  textAlign(CENTER);
  stroke(250)
  strokeWeight(5)
  text("未来の料理", 250, 200);
  textSize(20);
  text("～2100年の料理を体験してみよう！～", 250, 240);
  textSize(30);
  text("Click to start", 250, 300);
  textSize(20);
  text("（画面クリックで進んでください）", 250, 360);
  textSize(50);
}

function scene1() {
  image(room, 250, 250, 460, 460);
  noStroke();
  fill(0)
  textSize(18)
  text("（画面クリックで進んでください）",250,360)
  fill(255, 165, 101);
  textSize(18);
  rect(250, 35, 500, 60);
  fill(255);
  text("これは未来のキッチンだよ！早速料理してみよう", 250, 40);
}

function scene2() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 70, 500, 100);
  fill(255);
  text("何も無いじゃないかって？", 250, 40);
  text("実はこのキッチンテーブルに仕掛けがあるんだ！", 250, 70);
  text("２回タッチしてみよう（テーブルを２回クリックしてね）", 250, 100);
}

function scene3() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 70, 500, 100);
  fill(255);
  text("レシピ選択画面が出てきたね！", 250, 40);
  text("このキッチンにはAIが搭載されていて、", 250, 70);
  text("画面で作り方などを教えてくれるよ", 250, 100);
  textSize(14);
  fill(225);
  rect(250, 280, 500, 180);
  fill(0, 0, 0, 160);
  text("今回作るレシピを選んでください", 250, 220);

  image(curry, x1, y1 + 3, 90, 80);
  text("カレーライス", x1, y2);

  image(burger, x2, y1 + 5, 100, 100);
  text("ハンバーグ", x2, y2);

  image(omu, x3, y1, 100, 100);
  text("オムライス", x3, y2);

  image(pasta, x4, y1, 100, 100);
  text("パスタ", x4, y2);

  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene4() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 35, 500, 100);
  fill(225);
  rect(250, 280, 500, 180);
  fill(255);
  text("今回はオムライスを作ってみよう", 250, 40);
  text("（オムライスをクリックしてね）", 250, 70);

  textSize(14);
  fill(0, 0, 0, 180);
  text("今回作るレシピを選んでください", 250, 220);

  image(curry, x1, y1 + 3, 90, 80);
  text("カレーライス", x1, y2);

  image(burger, x2, y1 + 5, 100, 100);
  text("ハンバーグ", x2, y2);

  image(omu, x3, y1, 100, 100);
  text("オムライス", x3, y2);

  image(pasta, x4, y1, 100, 100);
  text("パスタ", x4, y2);

  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function error1() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 70, 500, 100);
  fill(225);
  rect(250, 280, 500, 180);
  fill(255);
  text("今回はオムライスを作ってみよう", 250, 40);
  text("（オムライスをクリックしてね）", 250, 70);
  text("それはオムライスじゃないよ！！", 250, 100);

  textSize(14);
  fill(0, 0, 0, 160);
  text("今回作るレシピを選んでください", 250, 220);

  image(curry, x1, y1 + 3, 90, 80);
  text("カレーライス", x1, y2);

  image(burger, x2, y1 + 5, 100, 100);
  text("ハンバーグ", x2, y2);

  image(omu, x3, y1, 100, 100);
  text("オムライス", x3, y2);

  image(pasta, x4, y1, 100, 100);
  text("パスタ", x4, y2);

  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene6() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 70, 500, 100);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("コンロとまな板、そしてレシピが出てきたね！", 250, 40);
  text("このキッチンはレシピに沿って", 250, 70);
  text("必要な時に必要なものが出てくるんだ！", 250, 100);

  textSize(14);
  fill(0, 0, 0, 160);
  text("①にんじん、玉ねぎ、鶏肉を切ってフライパンで炒める", 250, 180);
  image(konro, 30, 300, 270, 160);
  image(manaita, 420, 300, 160, 130);
  image(flypan, 100, 330, 100, 170);
  image(button, 45, 355, 65, 65);

  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene7() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 70, 500, 100);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("レシピ通り食材を切ってみよう！", 250, 40);
  text("まずまな板に食材を持ってきてね", 250, 70);
  text("（食材を枠内に入れてクリックしよう）", 250, 100);
  textSize(14);
  fill(0, 0, 0, 160);
  text("①にんじん、玉ねぎ、鶏肉を切ってフライパンで炒める", 250, 180);
  image(konro, 30, 300, 270, 160);
  image(manaita, 420, 300, 160, 130);
  image(waku1, 420, 300, 120, 110);
  image(flypan, 100, 330, 100, 170);
  image(button, 45, 355, 65, 65);

  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene9() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 70, 500, 100);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("できたね！", 250, 40);
  text("次は食材を切ってみよう", 250, 70);
  text("（クリックして食材を切ろう）", 250, 100);
  textSize(14);
  fill(0, 0, 0, 160);
  text("①にんじん、玉ねぎ、鶏肉を切ってフライパンで炒める", 250, 180);
  image(konro, 30, 300, 270, 160);
  image(manaita, 420, 300, 160, 130);
  image(shokuzai1, 420, 290, 140, 125);
  image(flypan, 100, 330, 100, 170);
  image(button, 45, 355, 65, 65);

  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene11() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 35, 500, 60);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("OK！じゃあ焼いていこう", 250, 40);
  textSize(14);
  fill(0, 0, 0, 160);
  text("①にんじん、玉ねぎ、鶏肉を切ってフライパンで炒める", 250, 180);
  image(konro, 30, 300, 270, 160);
  image(manaita, 420, 300, 160, 130);
  image(shokuzai1cut, 440, 300, 130, 90);
  image(flypan, 100, 330, 100, 170);
  image(button, 45, 355, 65, 65);
  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene12() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 70, 500, 100);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("「ON」ボタンをクリックすると", 250, 40);
  text("AIが自動で火力調整してくれるよ！", 250, 70);
  text("押してみよう！", 250, 100);
  textSize(14);
  fill(0, 0, 0, 160);
  text("①にんじん、玉ねぎ、鶏肉を切ってフライパンで炒める", 250, 180);
  image(konro, 30, 300, 270, 160);
  image(manaita, 420, 300, 160, 130);
  image(flypan, 100, 330, 100, 170);
  image(shokuzai2cut, 100, 300, 100, 105);
  image(button, 45, 355, 65, 65);
  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene14() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 35, 500, 60);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("（炒め中…ちょっと待っててね！）", 250, 40);
  textSize(14);
  fill(0, 0, 0, 160);
  text("①にんじん、玉ねぎ、鶏肉を切ってフライパンで炒める", 250, 180);
  image(konro, 30, 300, 270, 160);
  image(manaita, 420, 300, 160, 130);
  image(flypan, 100, 330, 100, 170);
  image(shokuzai2cut, 100, 300, 100, 105);
  image(button, 45, 355, 65, 65);
  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene15() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 70, 500, 100);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("炒めていたら次の説明が出てきたね！", 250, 40);
  text("AIが調理過程を認識して、その時に合った", 250, 70);
  text("説明を出してくれるんだ！", 250, 100);
  textSize(14);
  fill(0, 0, 0, 160);
  text("②ライスとケチャップを加えて混ぜたらケチャップライスの完成！", 250, 180);
  image(konro, 30, 300, 270, 160);
  image(manaita, 420, 300, 160, 130);
  image(flypan, 100, 330, 100, 170);
  image(shokuzai2cut, 100, 300, 100, 105);
  image(button, 45, 355, 65, 65);
  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene16() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 70, 500, 100);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("レシピ通り", 250, 40);
  text("トマトとケチャップを入れよう", 250, 70);
  text("（フライパンをクリックして入れてね！）", 250, 100);
  textSize(14);
  fill(0, 0, 0, 160);
  text("②ライスとケチャップを加えて混ぜたらケチャップライスの完成！", 250, 180);
  image(konro, 30, 300, 270, 160);
  image(manaita, 420, 300, 160, 130);
  image(flypan, 100, 330, 100, 170);
  image(shokuzai2cut, 100, 300, 100, 105);
  image(button, 45, 355, 65, 65);
  image(ketya, 185, 280, 50, 50);
  image(rice, 240, 280, 70, 70);
  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene18() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 35, 500, 60);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("ケチャップライスの完成！！", 250, 40);
  textSize(14);
  fill(0, 0, 0, 160);
  text("③食材を出したフライパンに溶き卵を流して混ぜながら火を通す", 250, 180);
  image(konro, 30, 300, 270, 160);
  image(manaita, 420, 300, 160, 130);
  image(flypan, 100, 330, 100, 170);
  image(ketyarice, 100, 295, 100, 105);
  image(button, 45, 355, 65, 65);
  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene19() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 52.5, 500, 80);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("次にレシピ通り卵を溶こう", 250, 40);
  text("卵をクリックして割ってね", 250, 70);
  textSize(14);
  fill(0, 0, 0, 160);
  text("③食材を出したフライパンに溶き卵を流して混ぜながら火を通す", 250, 180);
  image(konro, 30, 300, 270, 160);
  image(flypan, 100, 330, 100, 170);
  image(ketyarice2, 420, 300, 100, 100);
  image(bowl, 280, 300, 100, 100);
  image(button, 45, 355, 65, 65);
  image(tamago, 320, 270, 30, 30);
  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene21() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 70, 500, 100);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("割れたね！", 250, 40);
  text("じゃあ火を通していこう", 250, 70);
  text("もう一度ONボタンを押してね", 250, 100);
  textSize(14);
  fill(0, 0, 0, 160);
  text("③食材を出したフライパンに溶き卵を流して混ぜながら火を通す", 250, 180);
  image(konro, 30, 300, 270, 160);
  image(flypan, 100, 330, 100, 170);
  image(ketyarice2, 420, 300, 100, 100);
  image(bowl, 280, 300, 100, 100);
  image(button, 45, 355, 65, 65);
  image(tokitamago1, 280, 310, 80, 160);
  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene23() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 35, 500, 60);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("（炒め中…ちょっと待っててね！）", 250, 40);
  textSize(14);
  fill(0, 0, 0, 160);
  text("③食材を出したフライパンに溶き卵を流して混ぜながら火を通す", 250, 180);
  image(konro, 30, 300, 270, 160);
  image(flypan, 100, 330, 100, 170);
  image(ketyarice2, 420, 300, 100, 100);
  image(bowl, 280, 300, 100, 100);
  image(button, 45, 355, 65, 65);
  image(tokitamago1, 100, 310, 100, 200);
  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene24() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 70, 500, 100);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("いい感じになってきた！", 250, 40);
  text("最後にレシピ通りケチャップライス", 250, 70);
  text("の上に被せるよ！", 250, 100);
  textSize(14);
  fill(0, 0, 0, 160);
  text("④ケチャップライスの上でフライパンを", 250, 180);
  text("ひっくり返して卵を乗せたら完成", 250, 200);
  image(konro, 30, 300, 270, 160);
  image(flypan, 100, 330, 100, 170);
  image(ketyarice2, 420, 300, 100, 100);
  image(bowl, 280, 300, 100, 100);
  image(button, 45, 355, 65, 65);
  image(tokitamago2, 100, 300, 80, 100);
  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene25() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 52.5, 500, 80);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("ケチャップライスをクリックして", 250, 40);
  text("卵を乗せてね！", 250, 70);
  textSize(14);
  fill(0, 0, 0, 160);
  text("④ケチャップライスの上でフライパンを", 250, 180);
  text("ひっくり返して卵を乗せたら完成", 250, 200);
  image(konro, 30, 300, 270, 160);
  image(ketyarice2, 270, 300, 100, 100);
  image(button, 45, 355, 65, 65);
  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene27() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 70, 500, 100);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("オムライスの完成！", 250, 40);
  text("AI搭載のキッチンはこのように", 250, 70);
  text("料理のサポートをしてくれるよ！", 250, 100);
  textSize(14);
  fill(0, 0, 0, 160);
  text("④ケチャップライスの上でフライパンを", 250, 180);
  text("ひっくり返して卵を乗せたら完成", 250, 200);
  image(konro, 30, 300, 270, 160);
  image(omufin, 270, 300, 100, 140);
  image(button, 45, 355, 65, 65);
  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}

function scene28() {
  image(room, 250, 250, 460, 460);
  fill(255, 165, 101);
  textSize(18);
  rect(250, 70, 500, 100);
  fill(225);
  rect(250, 260, 500, 220);
  fill(255);
  text("これからこんなキッチンが", 250, 40);
  text("出るかもしれないと思ったら", 250, 70);
  text("とてもワクワクするね！！", 250, 100);
  textSize(14);
  fill(0, 0, 0, 160);
  text("～fin～", 250, 180);
  image(konro, 30, 300, 270, 160);
  image(omufin, 270, 300, 100, 140);
  image(button, 45, 355, 65, 65);
  fill(255, 165, 101);
  rect(0, 100, 40, 1000);
  rect(500, 100, 40, 1000);
}
