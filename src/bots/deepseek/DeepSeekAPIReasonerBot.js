import DeepSeekAPIBot from "./DeepSeekAPIBot";

export default class DeepSeekAPIReasonerBot extends DeepSeekAPIBot {
  static _className = "DeepSeekAPIReasonerBot";
  static _model = "deepseek-reasoner";

  constructor() {
    super();
  }
}
