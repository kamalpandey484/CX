import { google } from "@ai-sdk/google"
import { Agent, stepCountIs } from "@convex-dev/agent"
import { components } from "../../../_generated/api"

export const supportAgent = new Agent(components.agent, {
  name: "CX Agent",
  languageModel: google.chat("gemini-2.5-flash") as unknown as any,
  instructions: "You are a customer support agent",
  stopWhen: stepCountIs(3),
})
