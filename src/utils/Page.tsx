export const Page = {
  MAIN: "main",
  WHY: "why",
  ARGUMENTS: "arguments",
  LINES: "lines",
  CONTRACTS: "contracts",
  IDENTIFYING_GEN_AI: "identifying_gen_ai",
  CREATIVES: "creatives",
  ORGANISATIONS: "organisations",
} as const;

export type Page = (typeof Page)[keyof typeof Page];
