import { generateText, generateObject } from "ai"
import { openai } from "@ai-sdk/openai"
import { google } from "@ai-sdk/google"
import { z } from "zod"

// Using Google Gemini as default if available, or fallback to OpenAI
const model = process.env.GOOGLE_GENERATIVE_AI_API_KEY
    ? google("gemini-1.5-pro-latest")
    : openai("gpt-4o")

export async function generateAuditSummary(assets: any[]) {
    const { text } = await generateText({
        model,
        prompt: `Analyze the following asset inventory data and provide a concise executive summary for an IT audit. 
    Highlight total count, high-value items, potential risks (outdated warranty), and distribution.
    Data: ${JSON.stringify(assets)}`,
    })
    return text
}

export async function predictProcurementNeeds(inventoryHistory: any[]) {
    const { object } = await generateObject({
        model,
        schema: z.object({
            recommendations: z.array(z.object({
                category: z.string(),
                quantity: z.number(),
                reason: z.string(),
                urgency: z.enum(["LOW", "MEDIUM", "HIGH"]),
            })),
            forecastSummary: z.string(),
        }),
        prompt: `Based on usage patterns and upcoming hires, forecast procurement needs for the next quarter.
    History: ${JSON.stringify(inventoryHistory)}`,
    })
    return object
}

export async function generateOffboardingReport(employee: any, assets: any[]) {
    const { text } = await generateText({
        model,
        prompt: `Generate a professional asset recovery report for the following offboarding employee.
    Employee: ${JSON.stringify(employee)}
    Assigned Assets: ${JSON.stringify(assets)}
    Include a checklist of items to be returned and their current condition.`,
    })
    return text
}
