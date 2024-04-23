import {
  findIconDefinition,
  IconDefinition,
  IconLookup,
  IconName,
} from '@fortawesome/fontawesome-svg-core';

export function generateIconDefinition(name: IconName): IconDefinition {
  const lookup: IconLookup = { prefix: 'fas', iconName: name };
  return findIconDefinition(lookup);
}
