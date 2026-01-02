
import { BASE_PATH } from "@/lib/constants";

export function getAssetPath(path: string): string {
    if (path.startsWith("/")) {
        return `${BASE_PATH}${path}`;
    }
    return `${BASE_PATH}/${path}`;
}
