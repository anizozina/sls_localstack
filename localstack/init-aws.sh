#!/bin/bash
function gen_topic() {
  TOPIC_NAME=$1
  echo "create sns topic: ${TOPIC_NAME}"
  awslocal sns create-topic --name $TOPIC_NAME
}

function show_topics() {
  awslocal s3 list-topics
}

gen_topic "sample-topic"
