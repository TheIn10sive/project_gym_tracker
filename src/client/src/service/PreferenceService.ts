import { Preferences } from "@capacitor/preferences";

class PreferenceService {
  async set(key: string, value: string) {
    await Preferences.set({ key, value });
  }

  async get(
    key: string,
    defaultValue: string | null = null
  ): Promise<string | null> {
    const value = (await Preferences.get({ key })).value;
    return value !== null ? value : defaultValue;
  }

  async clear() {
    await Preferences.clear();
  }

  async remove(key: string) {
    await Preferences.remove({ key });
  }
}

export default new PreferenceService();
