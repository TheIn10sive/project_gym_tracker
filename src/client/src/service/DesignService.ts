import { reactive } from "vue";
import PreferenceService from "./PreferenceService";

interface DesignStatus {
  dark: boolean;
}

class DesignService {
  status: DesignStatus = reactive({
    dark: false,
  });

  constructor() {
    PreferenceService.get("darkmode", "false").then((value) => {
      this.setDarkMode(value === "true");
    });
  }

  async setDarkMode(status: boolean) {
    if (status) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    await PreferenceService.set("darkmode", `${status}`);
    this.status.dark = status;
  }
}

export default new DesignService();
