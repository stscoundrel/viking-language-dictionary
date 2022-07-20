import path from 'path';
import { read } from './services/reader';
import { DictionaryEntry } from './models';

const DICTIONARY_JSON = path.join(`${__dirname}/../assets/dictionary.json`);

export function getDictionary(): DictionaryEntry[] {
  const words = read(DICTIONARY_JSON);

  return words;
}

export default {
  getDictionary,
};
