import * as locales from 'assets/locales';

class LangService {
  static getMessages(locale: keyof typeof locales) {
    return locales[locale];
  }
}

export default LangService;
