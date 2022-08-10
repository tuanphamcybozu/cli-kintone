import * as yargs from "yargs";

import { run } from "../../record/import";
import { SupportedImportEncoding } from "../../record/import/utils/file";
import { CommandModule } from "yargs";

const command = "import";

const describe = "import the records of the specified app";

const encoding: SupportedImportEncoding[] = ["utf8", "sjis"];

const builder = (args: yargs.Argv) =>
  args
    .option("base-url", {
      describe: "Kintone Base Url",
      default: process.env.KINTONE_BASE_URL,
      defaultDescription: "KINTONE_BASE_URL",
      type: "string",
      demandOption: true,
      requiresArg: true,
    })
    .option("username", {
      alias: "u",
      describe: "Kintone Username",
      default: process.env.KINTONE_USERNAME,
      defaultDescription: "KINTONE_USERNAME",
      type: "string",
      requiresArg: true,
    })
    .option("password", {
      alias: "p",
      describe: "Kintone Password",
      default: process.env.KINTONE_PASSWORD,
      defaultDescription: "KINTONE_PASSWORD",
      type: "string",
      requiresArg: true,
    })
    .option("api-token", {
      describe: "App's API token",
      default: process.env.KINTONE_API_TOKEN,
      defaultDescription: "KINTONE_API_TOKEN",
      type: "array",
      requiresArg: true,
    })
    .option("basic-auth-username", {
      describe: "Kintone Basic Auth Username",
      default: process.env.KINTONE_BASIC_AUTH_USERNAME,
      defaultDescription: "KINTONE_BASIC_AUTH_USERNAME",
      type: "string",
      requiresArg: true,
    })
    .option("basic-auth-password", {
      describe: "Kintone Basic Auth Password",
      default: process.env.KINTONE_BASIC_AUTH_PASSWORD,
      defaultDescription: "KINTONE_BASIC_AUTH_PASSWORD",
      type: "string",
      requiresArg: true,
    })
    .option("app", {
      describe: "The ID of the app",
      type: "string",
      demandOption: true,
      requiresArg: true,
    })
    .option("guest-space-id", {
      describe: "The ID of guest space",
      default: process.env.KINTONE_GUEST_SPACE_ID,
      defaultDescription: "KINTONE_GUEST_SPACE_ID",
      type: "string",
      requiresArg: true,
    })
    .option("attachments-dir", {
      describe: "Attachment file directory",
      type: "string",
      requiresArg: true,
    })
    .option("file-path", {
      describe: 'The path to source file. ".csv" or ".json"',
      type: "string",
      demandOption: true,
      requiresArg: true,
    })
    .option("encoding", {
      describe:
        "Character encoding\n(available only if the source file format is CSV)",
      default: "utf8" as SupportedImportEncoding,
      choices: encoding,
      requiresArg: true,
    })
    .option("update-key", {
      describe: "The key to Bulk Update",
      type: "string",
      requiresArg: true,
    })
    .option("pfx-file-path", {
      describe: "The path to client certificate file",
      type: "string",
      requiresArg: true,
    })
    .option("pfx-file-password", {
      describe: "The password of client certificate file",
      type: "string",
      requiresArg: true,
    })
    .option("proxy", {
      describe: "The URL of a proxy server",
      default: process.env.HTTPS_PROXY ?? process.env.https_proxy,
      defaultDescription: "HTTPS_PROXY",
      type: "string",
    });

type Args = yargs.Arguments<
  ReturnType<typeof builder> extends yargs.Argv<infer U> ? U : never
>;

const handler = (args: Args) => {
  return run({
    baseUrl: args["base-url"],
    username: args.username,
    password: args.password,
    apiToken: args["api-token"],
    basicAuthUsername: args["basic-auth-username"],
    basicAuthPassword: args["basic-auth-password"],
    app: args.app,
    guestSpaceId: args["guest-space-id"],
    attachmentsDir: args["attachments-dir"],
    filePath: args["file-path"],
    updateKey: args["update-key"],
    encoding: args.encoding,
    pfxFilePath: args["pfx-file-path"],
    pfxFilePassword: args["pfx-file-password"],
    httpsProxy: args.proxy,
  });
};

export const importCommand: CommandModule<{}, Args> = {
  command,
  describe,
  builder,
  handler,
};
