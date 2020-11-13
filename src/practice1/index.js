import getUrl from "./utils";
import { ADDRESS, PATH, PORT, REGION } from "./constant";

const url = getUrl(ADDRESS, PORT, PATH);
const region = REGION;
export { url, region };
