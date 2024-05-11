import { getUserSettingsInstance } from "../(datastore)/userSettings";
import Text from "../ii18Text.json";

const getText = (key) => {
  let languageKey = getUserSettingsInstance()
    ? window.user.settings.language
    : "en";

  console.log(Text);

  return Text[key][languageKey];
};

export { getText };
