import { DictionaryEntry } from '../models';

export const ADDITIONAL_ENTRIES: DictionaryEntry[] = [
  {
    headword: 'einhvern',
    definition: 'somebody[sb] acc',
    isCommon: false,
  },
  {
    headword: 'eitthvat',
    definition: 'something[sth] acc',
    isCommon: false,
  },
  {
    headword: 'einhverjum',
    definition: '(for) [sb] dat',
    isCommon: false,
  },
  {
    headword: 'einhverju',
    definition: '(for) [sth] dat',
    isCommon: false,
  },
  {
    headword: 'einhvers',
    definition: '(of)[sb] or[sth] gen',
    isCommon: false,
  },
];

export const appendAdditionalEntries = (
  words: DictionaryEntry[],
): DictionaryEntry[] => words.concat(ADDITIONAL_ENTRIES);
