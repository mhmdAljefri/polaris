import postcss, {Plugin} from 'postcss';

import type {MigrationFn} from '../../types';
import {createRegexFromMap} from '../../utilities/regex';

const spacingMap = {
  'spacing(none)': 'var(--p-space-0)',
  'spacing(extra-tight)': 'var(--p-space-1)',
  'spacing(tight)': 'var(--p-space-2)',
  'spacing(base-tight)': 'var(--p-space-3)',
  'spacing()': 'var(--p-space-4)',
  'spacing(base)': 'var(--p-space-4)',
  'spacing(loose)': 'var(--p-space-5)',
  'spacing(extra-loose)': 'var(--p-space-8)',
};

const plugin = (): Plugin => ({
  postcssPlugin: 'ReplaceSassSpacing',
  Declaration(decl) {
    decl.value = decl.value.replace(
      createRegexFromMap(spacingMap),
      (value) => spacingMap[value as keyof typeof spacingMap],
    );
  },
});

export const migration: MigrationFn = (fileContent: string) => {
  return postcss(plugin()).process(fileContent, {
    parser: require('postcss-scss'),
  }).css;
};

migration.extensions = ['.scss'];