/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "juhoniinikoski",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "eu-north-1",
          profile: "juho-sandbox",
        },
      },
    };
  },
  async run() {
    new sst.aws.Astro("AstroSite", {
      domain: {
        name: "juhoniinikoski.com",
        dns: false,
        cert: "arn:aws:acm:us-east-1:891377093701:certificate/5f242e2d-d71f-4fe8-9e75-b365a4fe7c22",
      },
    });
  },
});
