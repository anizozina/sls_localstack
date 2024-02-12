import { Context, SNSEvent, SNSHandler } from 'aws-lambda';

export const main: SNSHandler = async (event: SNSEvent, context: Context) => {
  console.log(JSON.stringify(event.Records?.map((s) => s.Sns)));
  console.log(context);
};
