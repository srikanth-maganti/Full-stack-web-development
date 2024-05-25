const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDvO_3XiLgLSa0r1qjSSaQlpu228cHinjI");

async function run() {
    const generationConfig = {
        stopSequences: ["red"],
        maxOutputTokens: 200,
        temperature: 0.9,
        topP: 0.1,
        topK: 16,
      };
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro",generationConfig});

  const prompt = "what is anime?";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();