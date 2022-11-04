import {check} from '../../../utilities/testUtils';

const migration = 'scss-replace-text-emphasis';
const fixtures = ['scss-replace-text-emphasis', 'with-namespace'];

for (const fixture of fixtures) {
  check(__dirname, {
    fixture,
    migration,
    extension: 'scss',
    options: {
      namespace: fixture.includes('with-namespace')
        ? 'legacy-polaris-v8'
        : undefined,
    },
  });
}
