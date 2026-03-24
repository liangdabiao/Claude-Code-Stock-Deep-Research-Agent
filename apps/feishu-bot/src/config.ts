export type FeishuBotConfig = {
  appId: string;
  appSecret: string;
  usePersistentConnection: boolean;
};

export function loadFeishuBotConfig(env: Record<string, string | undefined>): FeishuBotConfig {
  return {
    appId: env.FEISHU_APP_ID ?? "",
    appSecret: env.FEISHU_APP_SECRET ?? "",
    usePersistentConnection: env.FEISHU_USE_PERSISTENT_CONNECTION !== "false"
  };
}
