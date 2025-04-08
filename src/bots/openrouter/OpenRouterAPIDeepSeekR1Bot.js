import OpenRouterAPIBot from "./OpenRouterAPIBot";

export default class OpenRouterAPIDeepSeekR1Bot extends OpenRouterAPIBot {
  static _className = "OpenRouterAPIDeepSeekR1Bot";
  static _model = "deepseek/deepseek-r1:free";
  static _logoFilename = "deepseek.svg";
  static _isDarkLogo = true;

  constructor() {
    super();
  }
}
