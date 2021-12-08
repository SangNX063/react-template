import { IRootState } from '@src/app-redux/interface';
import { IConfigsReducer } from '@src/configs';
import { translateByLanguage } from '@src/i18';
import { createSelector } from 'reselect';

export const configsSelector = createSelector(
  (state: IRootState) => state.configs,
  (configs: IConfigsReducer) => configs,
);

export const translateSelector = createSelector(configsSelector, (configs) =>
  translateByLanguage(configs.language),
);

export const appTranslateSelector = createSelector(
  translateSelector,
  (translate) => translate.app,
);

export const nodeMonitorTranslateSelector = createSelector(
  translateSelector,
  (translate) => translate.nodeMonitor,
);

export const reuseTranslateSelector = createSelector(
  translateSelector,
  (translate) => translate.reuse,
);
