import OpenRouterAPIBot from "./OpenRouterAPIBot";

export default class OpenRouterAPIDeepSeekV3Bot extends OpenRouterAPIBot {
  static _className = "OpenRouterAPIDeepSeekV3Bot";
  static _model = "deepseek/deepseek-chat-v3";
  static _logoFilename = "deepseek.svg";
  static _isDarkLogo = true;

  constructor() {
    super();
  }
}
