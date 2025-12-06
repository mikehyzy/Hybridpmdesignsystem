import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generateFocusPlan(userMessage: string) {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an AI productivity coach. Create structured, actionable daily focus plans. Always return valid JSON only, no markdown formatting."
        },
        {
          role: "user",
          content: `Create a structured daily focus plan based on this request:

"${userMessage}"

Return ONLY valid JSON with EXACTLY this format:

{
  "headline": "Brief motivating headline for the day",
  "deep_work_block": "Description of morning deep work session",
  "collaboration_block": "Description of afternoon collaboration time",
  "top_priorities": ["Priority 1", "Priority 2", "Priority 3"],
  "recommendations": ["Recommendation 1", "Recommendation 2"]
}`
        }
      ],
      response_format: { type: "json_object" }
    });

    const resultText = completion.choices[0]?.message?.content;

    if (!resultText) {
      throw new Error("No response from OpenAI");
    }

    const json = JSON.parse(resultText);

    return json;
  } catch (err) {
    console.error("OpenAI Error:", err);

    return {
      error: true,
      message: "AI generation failed",
      details: err instanceof Error ? err.message : String(err)
    };
  }
}
