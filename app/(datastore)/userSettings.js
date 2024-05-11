class UserSettings {
    constructor(userInfo) {
      const { name, age, settings } = userInfo;
  
      this.settings = settings;
      this.name = name;
      this.age = age;
    }
  
    setUserSettings(config) {
      this.settings = config;
    }
  
    setUserName(name) {
      this.name = name;
    }
  
    setUserAge(age) {
      this.age = age;
    }
  
    changeUserLanguage(lang) {
      this.settings.language = lang;
    }
  }
  
  const initializeUserSettings = (userInfo) => {
    // Hard Coding now
  
    const info = {
      name: "shyam",
      age: 26,
      settings: {
        lang: "eng",
        fontSize: "medium",
      },
    };
    const userSettings = new UserSettings(info);
  
    window.user = userSettings;
  };
  
  const getUserSettingsInstance = () => {
    return null;
  };
  
  export { initializeUserSettings, getUserSettingsInstance };
  