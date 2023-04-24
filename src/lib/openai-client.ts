import { Configuration, OpenAIApi } from "openai";
import config from '../config'

const clientConfig: Configuration = new Configuration({
  apiKey: config.openaiApiKey,
  organization: config.openaiOrgId,
});

const augment =
  "Summarize and completely rewrite the following content for a 15 year old, and highlight the important points and avoid using phrases from the original text";

const client = new OpenAIApi(clientConfig);

async function createSummary(content: string) {
  const augmentedcontent = `${augment}: ${content}`;
  const result = await client.createCompletion({
    model: "gpt-3.5-turbo",
    max_tokens: 1500,
    temperature: 0.5,
    prompt: augmentedcontent
  });
  return result;
}

export default createSummary