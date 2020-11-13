import fetchMock from "fetch-mock";
import { getPoetryPromise, getPoetryAsync } from "../practice3";

fetchMock.mock("https://v1.jinrishici.com/all.json", {
  content: "天清一雁远，海阔孤帆迟。",
  origin: "送张舍人之江东",
  author: "李白",
  category: "古诗文-抒情-离别",
});

test("get poetry using Promise", async () => {
  const result = await getPoetryPromise();
  expect(result).toEqual([
    "送张舍人之江东",
    "李白",
    "天清一雁远，海阔孤帆迟。",
  ]);
});

test("get poetry using async", async () => {
  const result = await getPoetryAsync();
  expect(result).toEqual([
    "送张舍人之江东",
    "李白",
    "天清一雁远，海阔孤帆迟。",
  ]);
});
