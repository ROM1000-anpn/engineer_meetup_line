'use strict';

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// パッケージの呼び出し
const functions = require('firebase-functions');
const express = require('express');
const line = require('@line/bot-sdk');

const config = {
    // チャネル基本設定からチャネルシークレットキーを
    channelSecret: 'ea6f9def2e2b6947cb25b7b264c9f42b',
    // MessagingAPI設定からチャネルアクセストークンを
    channelAccessToken: 'bYqh7Skwi5mjoPcAqDoyf7xIRjyREXipfVK/izM60xdmj98zCSWRU+HdHWKsO2aAaGfyxkbF/M6s+0cq8BpiVZgBrFOBMcGIwNOTidRtFg9iVR39ozhyiR4tfNKbgfOB/3xf3jPjEOqLAJgPF66iPQdB04t89/1O/w1cDnyilFU='
};

const app = express();

// 返答スクリプト
app.post('/webhook', line.middleware(config), (req, res) => {
    console.log(req.body.events);
    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result));
});

const client = new line.Client(config);

async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: event.message.text //実際に返信の言葉を入れる箇所
  });
}

exports.app = functions.https.onRequest(app);