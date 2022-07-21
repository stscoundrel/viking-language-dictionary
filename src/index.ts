import path from 'path';
import { read } from './services/reader';
import { appendAdditionalEntries } from './services/dictionary';
import { DictionaryEntry } from './models';

const DICTIONARY_JSON = path.join(`${__dirname}/../assets/dictionary.json`);

export function getDictionary(): DictionaryEntry[] {
  const words = read(DICTIONARY_JSON);

  return appendAdditionalEntries(words);
}

export default {
  getDictionary,
};
