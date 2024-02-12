const handlerPath = (context: string) => {
  return `${context.split(process.cwd())[1].substring(1).replace(/\\/g, '/')}`;
};

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      sns: {
        topicName: 'sample-topic',
      },
    },
  ]
};
