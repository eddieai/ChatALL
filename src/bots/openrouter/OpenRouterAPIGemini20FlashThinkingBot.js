import OpenRouterAPIBot from "./OpenRouterAPIBot";

export default class OpenRouterAPIGemini20FlashThinkingBot extends OpenRouterAPIBot {
  static _className = "OpenRouterAPIGemini20FlashThinkingBot";
  static _model = "google/gemini-2.0-flash-thinking-exp:free";
  static _logoFilename = "gemini-2.0-flash-thinking-exp-1219-logo.svg";
  static _isDarkLogo = false;

  constructor() {
    super();
  }
}
