import { EntityExtractor } from "./scripts/EntityExtractor";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const url = tab.url;
    if (!url) return;
    const p = EntityExtractor.Params(url)
    console.log(p);
});