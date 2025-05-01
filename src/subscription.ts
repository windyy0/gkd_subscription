import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups, { OPEN_AD_ORDER } from './globalGroups';
import { RawApp, RawAppGroup } from '@gkd-kit/api';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);
const rawApps: RawApp[] = [];
apps.forEach((appConfig) => {
  appConfig.groups?.forEach((g: RawAppGroup) => {
    if (g.name.startsWith('开屏广告')) {
      g.order = OPEN_AD_ORDER;
    }
  });
  rawApps.push(appConfig);
});

export default defineGkdSubscription({
  id: 5277,
  name: '姐夫送小姨子的订阅',
  version: 0,
  author: '你得不到的姐夫',
  checkUpdateUrl: './windy_gkd.version.json5',
  supportUri: 'https://qm.qq.com/q/CsLz6Xvtzq',
  categories,
  globalGroups,
  apps: rawApps,
});
