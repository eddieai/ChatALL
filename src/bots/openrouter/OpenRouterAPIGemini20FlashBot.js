import OpenRouterAPIBot from "./OpenRouterAPIBot";

export default class OpenRouterAPIGemini20FlashBot extends OpenRouterAPIBot {
  static _className = "OpenRouterAPIGemini20FlashBot";
  static _model = "google/gemini-2.0-flash";
  static _logoFilename = "gemini-2.0-flash-exp-logo.svg";
  static _isDarkLogo = false;

  constructor() {
    super();
  }
}
