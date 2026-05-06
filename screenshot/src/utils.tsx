import { exec } from "node:child_process";
import { promisify } from "node:util";
import { closeMainWindow, showToast, Toast } from "@vicinae/api";

export const execAsync = promisify(exec);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function runGrimblast(action: string): Promise<void> {
  try {
    const now = new Date();
    const time =
      now.getFullYear() +
      "-" +
      String(now.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(now.getDate()).padStart(2, "0") +
      "T" +
      String(now.getHours()).padStart(2, "0") +
      ":" +
      String(now.getMinutes()).padStart(2, "0") +
      ":" +
      String(now.getSeconds()).padStart(2, "0");
    const path = `~/Pictures/Screenshots/${time}.png`;

    await closeMainWindow();
    await sleep(200);
    await execAsync(`grimblast copysave ${action} ${path}`);
  } catch (error) {
    console.error(error);
    showToast({
      style: Toast.Style.Failure,
      title: "Action failed",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
