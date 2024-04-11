import { updateThemeVariable } from './ScopeProvider/utils';

export * from './ScopeProvider';

export * from './Button';
export * from './View';
export { PresetSize } from './common/props';

// init css variable with default coloring and the correct theme key (light or dark)
updateThemeVariable();
