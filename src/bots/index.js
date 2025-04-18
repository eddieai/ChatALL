// Bots
import GeminiAPIBot from "@/bots/google/GeminiAPIBot";
import Gemini15ProAPIBot from "@/bots/google/Gemini15ProAPIBot";
import Gemini15FlashAPIBot from "@/bots/google/Gemini15FlashAPIBot";
import Gemini20FlashExpAPIBot from "@/bots/google/Gemini20FlashExpAPIBot";
import GeminiExp1206APIBot from "@/bots/google/GeminiExp1206APIBot";
import Gemini20FlashThinkingExp1219APIBot from "@/bots/google/Gemini20FlashThinkingExp1219APIBot";
import ChatGPT35Bot from "@/bots/openai/ChatGPT35Bot";
import ChatGPT4Bot from "@/bots/openai/ChatGPT4Bot";
import CohereAPICommandBot from "@/bots/cohere/CohereAPICommandBot";
import CohereAPICommandLightBot from "@/bots/cohere/CohereAPICommandLightBot";
import CohereAPICommandRBot from "@/bots/cohere/CohereAPICommandRBot";
import CohereAPICommandRPlusBot from "@/bots/cohere/CohereAPICommandRPlusBot";
import CohereAPIAya23Bot from "@/bots/cohere/CohereAPIAya23Bot";
import BingChatPreciseBot from "@/bots/microsoft/BingChatPreciseBot";
import BingChatBalancedBot from "@/bots/microsoft/BingChatBalancedBot";
import BingChatCreativeBot from "@/bots/microsoft/BingChatCreativeBot";
import SageBot from "@/bots/poe/SageBot";
import SparkBot from "@/bots/SparkBot";
import BardBot from "@/bots/google/BardBot";
import OpenAIAPI35Bot from "@/bots/openai/OpenAIAPI35Bot";
import OpenAIAPI4Bot from "@/bots/openai/OpenAIAPI4Bot";
import OpenAIAPI4128KBot from "@/bots/openai/OpenAIAPI4128KBot";
import OpenAIAPI4oBot from "@/bots/openai/OpenAIAPI4oBot";
import OpenAIAPI4oMiniBot from "./openai/OpenAIAPI4oMiniBot";
import OpenAIAPIo1Bot from "@/bots/openai/OpenAIAPIo1Bot";
import OpenAIAPIo1MiniBot from "./openai/OpenAIAPIo1MiniBot";
import MistralBot from "./MistralBot";
import MOSSBot from "@/bots/MOSSBot";
import WenxinQianfanBot from "@/bots/baidu/WenxinQianfanBot";
import VicunaBot from "@/bots/lmsys/VicunaBot";
import ChatGLMBot from "@/bots/zhipu/ChatGLMBot";
import AlpacaBot from "@/bots/lmsys/AlpacaBot";
import DevBot from "@/bots/DevBot";
import GradioAppBot from "@/bots/huggingface/GradioAppBot";
import Gemma7bGroqAPIBot from "@/bots/groq/Gemma7bGroqAPIBot";
import Gemma29bGroqAPIBot from "@/bots/groq/Gemma29bGroqAPIBot";
import Llama38bGroqAPIBot from "@/bots/groq/Llama38bGroqAPIBot";
import Llama370bGroqAPIBot from "@/bots/groq/Llama370bGroqAPIBot";
import Llama318bGroqAPIBot from "@/bots/groq/Llama3.18bGroqAPIBot";
import Llama3290bGroqAPIBot from "@/bots/groq/Llama3.290bGroqAPIBot";
import Llama3370bGroqAPIBot from "@/bots/groq/Llama3.370bGroqAPIBot";
import Mixtral8x7bGroqAPIBot from "@/bots/groq/Mixtral8x7bGroqAPIBot";
import HuggingChatBot from "@/bots/huggingface/HuggingChatBot";
import QianWenBot from "./QianWenBot";
import ChatGPT35PoeBot from "./poe/ChatGPT35PoeBot";
import ChatGPT4PoeBot from "./poe/ChatGPT4PoeBot";
import ChatGPT432kPoeBot from "./poe/ChatGPT432kPoeBot";
import Llama270bPoeBot from "./poe/Llama270bPoeBot";
import GooglePalm2PoeBot from "./poe/GooglePalm2PoeBot";
import CodeLlama34bPoeBot from "./poe/CodeLlama34bPoeBot";
import SkyWorkBot from "./SkyWorkBot";
import ChatGPT4MobileBot from "./openai/ChatGPT4MobileBot";
import AzureOpenAIAPIBot from "./microsoft/AzureOpenAIAPIBot";
import WenxinQianfanTurboBot from "./baidu/WenxinQianfanTurboBot";
import YouChatBot from "./YouChatBot";
import PerplexityBot from "./PerplexityBot";
import PhindBot from "./PhindBot";
import PiBot from "./PiBot";
import Qihoo360AIBrainBot from "./Qihoo360AIBrainBot";
import CharacterAIBot from "./CharacterAIBot";
import ClaudeAIBot from "./ClaudeAIBot";
import Llama2HC70bBot from "./huggingface/Llama2HC70bBot";
import Llama213bBot from "./lmsys/Llama213bBot";
import Llama27bBot from "./lmsys/Llama27bBot";
import Llama270bBot from "./lmsys/Llama270bBot";
import Falcon180bBot from "./huggingface/Falcon180bBot";
import ChatGLM6bBot from "./lmsys/ChatGLM6bBot";
import ChatGLM36bBot from "./lmsys/ChatGLM36bBot";
import CodeLlamaBot from "./lmsys/CodeLlamaBot";
import Vicuna7bBot from "./lmsys/Vicuna7bBot";
import Vicuna13bBot from "./lmsys/Vicuna13bBot";
import Wizardlm13bBot from "./lmsys/Wizardlm13bBot";
import Wizardlm70bBot from "./lmsys/Wizardlm70bBot";
import FalconHC180bBot from "./huggingface/FalconHC180bBot";
import CodeLlamaHCBot from "./huggingface/CodeLlamaHCBot";
import WenxinQianfan4Bot from "./baidu/WenxinQianfan4Bot";
import Zephyr7bBot from "./huggingface/Zephyr7bBot";
import GeminiAdvBot from "./google/GeminiAdvBot";
import Gemma7bItBot from "./lmsys/Gemma7bItBot";
import Gemma2bItBot from "./lmsys/Gemma2bItBot";
import Claude3SonnetBot from "./lmsys/Claude3SonnetBot";
import Claude3OpusBot from "./lmsys/Claude3OpusBot";
import ChatGLM4Bot from "./zhipu/ChatGLM4Bot";
import KimiBot from "./moonshot/KimiBot";
import ClaudeAPIOpusBot from "./anthropic/ClaudeAPIOpusBot";
import ClaudeAPI20Bot from "./anthropic/ClaudeAPI20Bot";
import ClaudeAPI21Bot from "./anthropic/ClaudeAPI21Bot";
import ClaudeAPISonnetBot from "./anthropic/ClaudeAPISonnetBot";
import ClaudeAPIHaikuBot from "./anthropic/ClaudeAPIHaikuBot";
import GrokBetaAPIBot from "./xai/GrokBetaAPIBot";
import Grok2APIBot from "./xai/Grok2APIBot";
import DeepSeekAPIReasonerBot from "./deepseek/DeepSeekAPIReasonerBot";
import DeepSeekAPIChatBot from "./deepseek/DeepSeekAPIChatBot";
import GitHubAPIGPT4oBot from "./github/GitHubAPIGPT4oBot";
import GitHubAPIGPT4oMiniBot from "./github/GitHubAPIGPT4oMiniBot";
import GitHubAPILlama318bBot from "./github/GitHubAPILlama318bBot";
import GitHubAPILlama3170bBot from "./github/GitHubAPILlama3170bBot";
import GitHubAPILlama31405bBot from "./github/GitHubAPILlama31405bBot";
import GitHubAPIMistralLargeBot from "./github/GitHubAPIMistralLargeBot";
import GitHubAPICodestralBot from "./github/GitHubAPICodestralBot";
import OpenRouterAPIDeepSeekR1Bot from "./openrouter/OpenRouterAPIDeepSeekR1Bot";
import OpenRouterAPIDeepSeekV3Bot from "./openrouter/OpenRouterAPIDeepSeekV3Bot";
import OpenRouterAPIGemini20FlashBot from "./openrouter/OpenRouterAPIGemini20FlashBot";
import OpenRouterAPIGemini20FlashThinkingBot from "./openrouter/OpenRouterAPIGemini20FlashThinkingBot";
import OpenRouterAPIGemini25ProBot from "./openrouter/OpenRouterAPIGemini25ProBot";
import OpenRouterAPILlama4MaverickBot from "./openrouter/OpenRouterAPILlama4MaverickBot";

const all = [
  Qihoo360AIBrainBot.getInstance(),
  AlpacaBot.getInstance(),
  SageBot.getInstance(), // Assistant@Poe
  BingChatCreativeBot.getInstance(),
  BingChatBalancedBot.getInstance(),
  BingChatPreciseBot.getInstance(),
  CharacterAIBot.getInstance(),
  ChatGLM6bBot.getInstance(),
  ChatGLM36bBot.getInstance(),
  ChatGLMBot.getInstance(),
  ChatGLM4Bot.getInstance(),
  ClaudeAIBot.getInstance(),
  Claude3OpusBot.getInstance(),
  Claude3SonnetBot.getInstance(),
  ClaudeAPIOpusBot.getInstance(),
  ClaudeAPISonnetBot.getInstance(),
  ClaudeAPIHaikuBot.getInstance(),
  ClaudeAPI20Bot.getInstance(),
  ClaudeAPI21Bot.getInstance(),
  CodeLlama34bPoeBot.getInstance(),
  CodeLlamaHCBot.getInstance(),
  CodeLlamaBot.getInstance(),
  CohereAPICommandBot.getInstance(),
  CohereAPICommandLightBot.getInstance(),
  CohereAPICommandRBot.getInstance(),
  CohereAPICommandRPlusBot.getInstance(),
  CohereAPIAya23Bot.getInstance(),
  WenxinQianfanBot.getInstance(),
  WenxinQianfanTurboBot.getInstance(),
  WenxinQianfan4Bot.getInstance(),
  Falcon180bBot.getInstance(),
  FalconHC180bBot.getInstance(),
  BardBot.getInstance(),
  GeminiAdvBot.getInstance(),
  GeminiAPIBot.getInstance(),
  Gemini15ProAPIBot.getInstance(),
  Gemini15FlashAPIBot.getInstance(),
  Gemini20FlashExpAPIBot.getInstance(),
  GeminiExp1206APIBot.getInstance(),
  Gemini20FlashThinkingExp1219APIBot.getInstance(),
  Gemma2bItBot.getInstance(),
  Gemma7bItBot.getInstance(),
  AzureOpenAIAPIBot.getInstance(),
  ChatGPT35Bot.getInstance(),
  ChatGPT35PoeBot.getInstance(),
  OpenAIAPI35Bot.getInstance(),
  ChatGPT4Bot.getInstance(),
  ChatGPT4MobileBot.getInstance(),
  ChatGPT4PoeBot.getInstance(),
  OpenAIAPI4Bot.getInstance(),
  OpenAIAPI4128KBot.getInstance(),
  OpenAIAPI4oBot.getInstance(),
  OpenAIAPI4oMiniBot.getInstance(),
  OpenAIAPIo1Bot.getInstance(),
  OpenAIAPIo1MiniBot.getInstance(),
  ChatGPT432kPoeBot.getInstance(),
  GradioAppBot.getInstance(),
  Gemma7bGroqAPIBot.getInstance(),
  Gemma29bGroqAPIBot.getInstance(),
  Llama38bGroqAPIBot.getInstance(),
  Llama370bGroqAPIBot.getInstance(),
  Llama318bGroqAPIBot.getInstance(),
  Llama3290bGroqAPIBot.getInstance(),
  Llama3370bGroqAPIBot.getInstance(),
  Mixtral8x7bGroqAPIBot.getInstance(),
  KimiBot.getInstance(),
  Llama27bBot.getInstance(),
  Llama213bBot.getInstance(),
  Llama270bPoeBot.getInstance(),
  Llama270bBot.getInstance(),
  Llama2HC70bBot.getInstance(),
  MistralBot.getInstance(),
  MOSSBot.getInstance(),
  HuggingChatBot.getInstance(),
  GooglePalm2PoeBot.getInstance(),
  PerplexityBot.getInstance(),
  PhindBot.getInstance(),
  PiBot.getInstance(),
  QianWenBot.getInstance(),
  SkyWorkBot.getInstance(),
  SparkBot.getInstance(),
  Vicuna7bBot.getInstance(),
  Vicuna13bBot.getInstance(),
  VicunaBot.getInstance(),
  Wizardlm13bBot.getInstance(),
  Wizardlm70bBot.getInstance(),
  Zephyr7bBot.getInstance(),
  YouChatBot.getInstance(),
  GrokBetaAPIBot.getInstance(),
  Grok2APIBot.getInstance(),
  DeepSeekAPIReasonerBot.getInstance(),
  DeepSeekAPIChatBot.getInstance(),
  GitHubAPIGPT4oBot.getInstance(),
  GitHubAPIGPT4oMiniBot.getInstance(),
  GitHubAPILlama318bBot.getInstance(),
  GitHubAPILlama3170bBot.getInstance(),
  GitHubAPILlama31405bBot.getInstance(),
  GitHubAPIMistralLargeBot.getInstance(),
  GitHubAPICodestralBot.getInstance(),
  OpenRouterAPIDeepSeekR1Bot.getInstance(),
  OpenRouterAPIDeepSeekV3Bot.getInstance(),
  OpenRouterAPIGemini20FlashBot.getInstance(),
  OpenRouterAPIGemini20FlashThinkingBot.getInstance(),
  OpenRouterAPIGemini25ProBot.getInstance(),
  OpenRouterAPILlama4MaverickBot.getInstance(),
];

const disabled = [
  "AlpacaBot",
  "HuggingChatBot",
  "Falcon180bBot",
  "ChatGLM6bBot",
  "ChatGLM36bBot",
  "CodeLlamaBot",
  "Vicuna7bBot",
  "Wizardlm13bBot",
];

if (process.env.NODE_ENV !== "production") {
  all.push(DevBot.getInstance());
}

const bots = {
  all,
  getBotByClassName(className) {
    return all.find((bot) => bot.getClassname() === className);
  },
};

disabled.forEach((className) => {
  const bot = bots.getBotByClassName(className);
  bot?.disable();
});

export const botTags = {
  free: [
    bots.getBotByClassName("BardBot"),
    bots.getBotByClassName("BingChatBalancedBot"),
    bots.getBotByClassName("BingChatCreativeBot"),
    bots.getBotByClassName("BingChatPreciseBot"),
    bots.getBotByClassName("ChatGLMBot"),
    bots.getBotByClassName("ChatGLM4Bot"),
    bots.getBotByClassName("ChatGLM6bBot"),
    bots.getBotByClassName("ChatGLM36bBot"),
    bots.getBotByClassName("ChatGPT35Bot"),
    bots.getBotByClassName("ChatGPT35PoeBot"),
    bots.getBotByClassName("GooglePalm2PoeBot"),
    bots.getBotByClassName("CodeLlama34bPoeBot"),
    bots.getBotByClassName("HuggingChatBot"),
    bots.getBotByClassName("Llama27bBot"),
    bots.getBotByClassName("Llama213bBot"),
    bots.getBotByClassName("Llama270bBot"),
    bots.getBotByClassName("Llama2HC70bBot"),
    bots.getBotByClassName("CodeLlamaBot"),
    bots.getBotByClassName("CodeLlamaHCBot"),
    bots.getBotByClassName("MistralBot"),
    bots.getBotByClassName("MOSSBot"),
    bots.getBotByClassName("Qihoo360AIBrainBot"),
    bots.getBotByClassName("QianWenBot"),
    bots.getBotByClassName("SkyWorkBot"),
    bots.getBotByClassName("SparkBot"),
    bots.getBotByClassName("YouChatBot"),
    bots.getBotByClassName("GradioAppBot"),
    bots.getBotByClassName("AlpacaBot"),
    bots.getBotByClassName("VicunaBot"),
    bots.getBotByClassName("Vicuna7bBot"),
    bots.getBotByClassName("Vicuna13bBot"),
    bots.getBotByClassName("CharacterAIBot"),
    bots.getBotByClassName("ClaudeAIBot"),
    bots.getBotByClassName("PerplexityBot"),
    bots.getBotByClassName("PhindBot"),
    bots.getBotByClassName("PiBot"),
    bots.getBotByClassName("SageBot"),
    bots.getBotByClassName("Falcon180bBot"),
    bots.getBotByClassName("Wizardlm13bBot"),
    bots.getBotByClassName("Wizardlm70bBot"),
    bots.getBotByClassName("FalconHC180bBot"),
    bots.getBotByClassName("Zephyr7bBot"),
    bots.getBotByClassName("Gemma2bItBot"),
    bots.getBotByClassName("Gemma7bItBot"),
    bots.getBotByClassName("Claude3SonnetBot"),
    bots.getBotByClassName("Claude3OpusBot"),
    bots.getBotByClassName("KimiBot"),
    bots.getBotByClassName("GitHubAPIGPT4oBot"),
    bots.getBotByClassName("GitHubAPIGPT4oMiniBot"),
    bots.getBotByClassName("GitHubAPILlama318bBot"),
    bots.getBotByClassName("GitHubAPILlama3170bBot"),
    bots.getBotByClassName("GitHubAPILlama31405bBot"),
    bots.getBotByClassName("GitHubAPIMistralLargeBot"),
    bots.getBotByClassName("GitHubAPICodestralBot"),
    bots.getBotByClassName("OpenRouterAPIDeepSeekR1Bot"),
    bots.getBotByClassName("OpenRouterAPIDeepSeekV3Bot"),
    bots.getBotByClassName("OpenRouterAPIGemini20FlashBot"),
    bots.getBotByClassName("OpenRouterAPIGemini20FlashThinkingBot"),
    bots.getBotByClassName("OpenRouterAPIGemini25ProBot"),
    bots.getBotByClassName("OpenRouterAPILlama4MaverickBot"),
  ],
  paid: [
    bots.getBotByClassName("ChatGPT4Bot"),
    bots.getBotByClassName("ChatGPT4MobileBot"),
    bots.getBotByClassName("ChatGPT4PoeBot"),
    bots.getBotByClassName("ChatGPT432kPoeBot"),
    bots.getBotByClassName("GeminiAdvBot"),
  ],
  openSource: [
    bots.getBotByClassName("AlpacaBot"),
    bots.getBotByClassName("HuggingChatBot"),
    bots.getBotByClassName("Llama27bBot"),
    bots.getBotByClassName("Llama213bBot"),
    bots.getBotByClassName("Llama270bBot"),
    bots.getBotByClassName("Llama270bPoeBot"),
    bots.getBotByClassName("Llama2HC70bBot"),
    bots.getBotByClassName("MOSSBot"),
    bots.getBotByClassName("VicunaBot"),
    bots.getBotByClassName("Vicuna7bBot"),
    bots.getBotByClassName("Vicuna13bBot"),
    bots.getBotByClassName("Falcon180bBot"),
    bots.getBotByClassName("ChatGLM6bBot"),
    bots.getBotByClassName("ChatGLM36bBot"),
    bots.getBotByClassName("CodeLlamaBot"),
    bots.getBotByClassName("CodeLlamaHCBot"),
    bots.getBotByClassName("CodeLlama34bPoeBot"),
    bots.getBotByClassName("Wizardlm13bBot"),
    bots.getBotByClassName("Wizardlm70bBot"),
    bots.getBotByClassName("FalconHC180bBot"),
    bots.getBotByClassName("Zephyr7bBot"),
    bots.getBotByClassName("Gemma2bItBot"),
    bots.getBotByClassName("Gemma7bItBot"),
    bots.getBotByClassName("Claude3SonnetBot"),
    bots.getBotByClassName("Claude3OpusBot"),
    bots.getBotByClassName("DeepSeekAPIReasonerBot"),
    bots.getBotByClassName("DeepSeekAPIChatBot"),
  ],
  api: [
    bots.getBotByClassName("GeminiAPIBot"),
    bots.getBotByClassName("Gemini15ProAPIBot"),
    bots.getBotByClassName("Gemini15FlashAPIBot"),
    bots.getBotByClassName("Gemini20FlashExpAPIBot"),
    bots.getBotByClassName("GeminiExp1206APIBot"),
    bots.getBotByClassName("Gemini20FlashThinkingExp1219APIBot"),
    bots.getBotByClassName("AzureOpenAIAPIBot"),
    bots.getBotByClassName("OpenAIAPI35Bot"),
    bots.getBotByClassName("OpenAIAPI4Bot"),
    bots.getBotByClassName("OpenAIAPI4128KBot"),
    bots.getBotByClassName("OpenAIAPI4oBot"),
    bots.getBotByClassName("OpenAIAPIo1Bot"),
    bots.getBotByClassName("OpenAIAPI4oMiniBot"),
    bots.getBotByClassName("OpenAIAPIo1MiniBot"),
    bots.getBotByClassName("WenxinQianfanBot"),
    bots.getBotByClassName("WenxinQianfanTurboBot"),
    bots.getBotByClassName("WenxinQianfan4Bot"),
    bots.getBotByClassName("ClaudeAPI20Bot"),
    bots.getBotByClassName("ClaudeAPI21Bot"),
    bots.getBotByClassName("ClaudeAPIHaikuBot"),
    bots.getBotByClassName("ClaudeAPIOpusBot"),
    bots.getBotByClassName("ClaudeAPISonnetBot"),
    bots.getBotByClassName("CohereAPICommandBot"),
    bots.getBotByClassName("CohereAPICommandLightBot"),
    bots.getBotByClassName("CohereAPICommandRBot"),
    bots.getBotByClassName("CohereAPICommandRPlusBot"),
    bots.getBotByClassName("CohereAPIAya23Bot"),
    bots.getBotByClassName("Gemma7bGroqAPIBot"),
    bots.getBotByClassName("Gemma29bGroqAPIBot"),
    bots.getBotByClassName("Llama38bGroqAPIBot"),
    bots.getBotByClassName("Llama370bGroqAPIBot"),
    bots.getBotByClassName("Llama318bGroqAPIBot"),
    bots.getBotByClassName("Llama3290bGroqAPIBot"),
    bots.getBotByClassName("Llama3370bGroqAPIBot"),
    bots.getBotByClassName("Mixtral8x7bGroqAPIBot"),
    bots.getBotByClassName("GrokBetaAPIBot"),
    bots.getBotByClassName("Grok2APIBot"),
    bots.getBotByClassName("DeepSeekAPIReasonerBot"),
    bots.getBotByClassName("DeepSeekAPIChatBot"),
    bots.getBotByClassName("GitHubAPIGPT4oBot"),
    bots.getBotByClassName("GitHubAPIGPT4oMiniBot"),
    bots.getBotByClassName("GitHubAPILlama318bBot"),
    bots.getBotByClassName("GitHubAPILlama3170bBot"),
    bots.getBotByClassName("GitHubAPILlama31405bBot"),
    bots.getBotByClassName("GitHubAPIMistralLargeBot"),
    bots.getBotByClassName("GitHubAPICodestralBot"),
    bots.getBotByClassName("OpenRouterAPIDeepSeekR1Bot"),
    bots.getBotByClassName("OpenRouterAPIDeepSeekV3Bot"),
    bots.getBotByClassName("OpenRouterAPIGemini20FlashBot"),
    bots.getBotByClassName("OpenRouterAPIGemini20FlashThinkingBot"),
    bots.getBotByClassName("OpenRouterAPIGemini25ProBot"),
    bots.getBotByClassName("OpenRouterAPILlama4MaverickBot"),
  ],
  madeInChina: [
    bots.getBotByClassName("Qihoo360AIBrainBot"),
    bots.getBotByClassName("QianWenBot"),
    bots.getBotByClassName("SkyWorkBot"),
    bots.getBotByClassName("SparkBot"),
    bots.getBotByClassName("WenxinQianfanBot"),
    bots.getBotByClassName("WenxinQianfanTurboBot"),
    bots.getBotByClassName("WenxinQianfan4Bot"),
    bots.getBotByClassName("MOSSBot"),
    bots.getBotByClassName("ChatGLMBot"),
    bots.getBotByClassName("ChatGLM4Bot"),
    bots.getBotByClassName("ChatGLM6bBot"),
    bots.getBotByClassName("ChatGLM36bBot"),
    bots.getBotByClassName("KimiBot"),
    bots.getBotByClassName("DeepSeekAPIReasonerBot"),
    bots.getBotByClassName("DeepSeekAPIChatBot"),
  ],
};
export default bots;
