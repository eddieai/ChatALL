import OpenRouterAPIBot from "./OpenRouterAPIBot";

export default class OpenRouterAPIGemini25ProBot extends OpenRouterAPIBot {
  static _className = "OpenRouterAPIGemini25ProBot";
  static _model = "google/gemini-pro";
  static _logoFilename = "gemini-1.5-logo.png";
  static _isDarkLogo = false;

  constructor() {
    super();
  }
}
