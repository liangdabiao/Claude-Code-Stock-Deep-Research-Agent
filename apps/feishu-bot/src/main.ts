import { loadFeishuBotConfig } from "./config.js";

const config = loadFeishuBotConfig(process.env);

if (!config.appId || !config.appSecret) {
  console.error("Missing FEISHU_APP_ID or FEISHU_APP_SECRET.");
}
