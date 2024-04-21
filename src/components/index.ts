import { updateThemeVariable } from './ScopeProvider/utils';

export * from './AuthProvider';
export * from './ScopeProvider';

export * from './Button';
export * from './Text';
export * from './View';
export * from './common';

// init css variable with default coloring and the correct theme key (light or dark)
updateThemeVariable();
