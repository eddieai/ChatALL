import OpenRouterAPIBot from "./OpenRouterAPIBot";

export default class OpenRouterAPIGemini25ProBot extends OpenRouterAPIBot {
  static _className = "OpenRouterAPIGemini25ProBot";
  static _model = "google/gemini-2.5-pro-exp-03-25:free";
  static _logoFilename = "gemini-chat-adv-logo.svg";
  static _isDarkLogo = false;

  constructor() {
    super();
  }
}
