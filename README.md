# これは何

Serverless Framework x LocalStackの構成で、SNSトリガーなLambdaを動作させるための最小構成

# 動かし方

```sh
$ docker compose up -d

# topicの生成確認
$ aws --endpoint-url=http://127.0.0.1:4566 \
  sns list-topics

# 依存関係のインストール
$ npm i
# LocalStackへのDeploy
$ npm run deploy

# 起動
$ aws --endpoint-url=http://127.0.0.1:4566 \
  sns publish \
  --topic-arn arn:aws:sns:ap-northeast-1:000000000000:sample-topic \
  --message "hoge"

# ログ確認
# # まずはLog Streamを特定
$ LOG_STREAM_NAME=$(aws --endpoint-url=http://127.0.0.1:4566 \
  logs describe-log-streams \
  --log-group-name /aws/lambda/sample-functions-local-sampleFunction \
  | jq -r ".logStreams[0].logStreamName")

# # 中身を見る
$ aws --endpoint-url=http://127.0.0.1:4566 \
  logs get-log-events \
  --log-group-name /aws/lambda/sample-functions-local-sampleFunction \
  --log-stream-name $LOG_STREAM_NAME
```

