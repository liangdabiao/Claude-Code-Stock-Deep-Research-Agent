import { loadFeishuBotConfig } from "./config.js";

const config = loadFeishuBotConfig(process.env);

if (!config.appId || !config.appSecret) {
  console.error("Missing FEISHU_APP_ID or FEISHU_APP_SECRET.");
  process.exitCode = 1;
} else {
  console.log(
    `[feishu-bot] config loaded. persistentConnection=${String(config.usePersistentConnection)}`
  );
  console.log(
    "[feishu-bot] current runtime is a scaffold stub. Wire the real Feishu SDK persistent connection before production use."
  );
}
