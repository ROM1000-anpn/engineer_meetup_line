## エンジニアゼミ登壇資料用　コードまとめ

---

### LINE Developers

1. プロバイダをつくる

   1. Create をクリック
   2. Provider nameに好きな名前を入力
   3. createをクリック

2. Create a Messaging API channelを選択

   1. channel nameを好きな名前で入力
   2. descriptionを適当に入力
   3. categoryはとりあえず「個人」
   4. sub categoryは適当
   5. line公式アカウント利用規約と公式アカウントAPI利用規約のチェックボックスにチェック入れる
   6. 作成

3. 応答設定

   1. 応答メッセージオフ

4. チャネルアクセストークンの発行

   1. 同じページの一番下に発行ボタンがあるのでクリック

   2. 出てきたトークンをコピー

      1. ```text
         bYqh7Skwi5mjoPcAqDoyf7xIRjyREXipfVK/izM60xdmj98zCSWRU+HdHWKsO2aAaGfyxkbF/M6s+0cq8BpiVZgBrFOBMcGIwNOTidRtFg9iVR39ozhyiR4tfNKbgfOB/3xf3jPjEOqLAJgPF66iPQdB04t89/1O/w1cDnyilFU=
         ```

5. チャネル基本設定

   1. チャネルシークレットキーをコピー

6. QRコードで友達追加

   1. messagingAPIタブ
   2. トーク画面に友達追加完了のデフォルトメッセージが届く



### Firebase

1. ローカルでプロジェクト作成（firebase cliをインストール済みを前提）

   1. ```
      firebase init functions
      ```

      ![image-20210427232857986](/Users/yamaokamiharu/Library/Application Support/typora-user-images/image-20210427232857986.png)

   2. セットアップ

      ```
      === project setup
      ```

      

      1. Create a new project
      2. プロジェクト名
      3. javascript
      4. Do you want to install dependencies with npm now?
         依存モジュールをnpmでインストールするか -> yes
      5.  Firebase initialization complete!
      6. webブラウザでfirebaseのプロジェクトが追加されていることを確認



### BOTの開発

1. ターミナルでfunctionsフォルダに移動して、必要なパッケージをインストール

   ```
   npm install --save @line/bot-sdk express
   ```

2. index.jsの書き換え

3. Firebase.jsonの書き換え



### 動作確認

1. ローカルサーバーの起動

   ```
   firebase serve --only functions,hosting
   ```

2. トンネリングサーバーの起動

   1. ngrokをインストール

      ```
      npm install --save ngrok
      ```

   2. トンネリングサーバーの起動（ローカルサーバーのポートと同じ番号）

      ```
      ngrok http 5000
      ```

3. ngrokの起動で生成されたurlをLINE Developers > MessagingAPI設定タブ > webhook設定のURLに登録する
   末尾に`/webhook`とつけるのを忘れずに

4. 友達登録したアカウントにトークを送ってみる
   打ったテキストと同じテキストを返してくれる！

※ngrokは起動毎にurlが変わってしまうので、開発するときはトンネリングサーバーは起動しっぱなしで！



### 接続永続化のためにデプロイ

⚠︎firebase経由で外部APIを使うには料金プランをBreaze（従量制）に変更しなければいけない
個人で楽しむ分には無料枠で収まるはず
![image-20210428000425262](/Users/yamaokamiharu/Library/Application Support/typora-user-images/image-20210428000425262.png)

```
firebase deploy --only functions,hosting
```

生成されたURLにLINE DevelopersのwebhookURLを書き換え
末尾に`/webhook`を入れるの忘れずに







### 各種URL

LINE Developers
https://developers.line.biz/console/channel/1655922050/messaging-api?status=success

Firebase
https://console.firebase.google.com/u/1/project/engineer-meetup-line/hosting/sites?consoleUI=FIREBASE

Github
https://github.com/ROM1000-anpn/engineer_study_meet01

