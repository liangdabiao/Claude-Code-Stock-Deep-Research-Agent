export type SendCardInput = {
  chatId: string;
  card: unknown;
};

export interface FeishuClient {
  sendCard(input: SendCardInput): Promise<void>;
}
