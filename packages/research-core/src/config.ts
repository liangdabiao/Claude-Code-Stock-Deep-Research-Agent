import { z } from "zod";

const CoreConfigSchema = z.object({
  BOT_REPORT_ROOT: z.string().min(1),
  BOT_SQLITE_PATH: z.string().min(1)
});

export type CoreConfig = {
  reportRoot: string;
  sqlitePath: string;
};

export function loadCoreConfig(env: Record<string, string | undefined>): CoreConfig {
  const parsed = CoreConfigSchema.parse(env);

  return {
    reportRoot: parsed.BOT_REPORT_ROOT,
    sqlitePath: parsed.BOT_SQLITE_PATH
  };
}
