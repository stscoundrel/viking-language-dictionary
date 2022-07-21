import { getDictionary } from '../src';
import { ADDITIONAL_ENTRIES } from '../src/services/dictionary';

describe('Viking Language Dictionary tests', () => {
  test('Returns dictionary in array format', () => {
    const result = getDictionary();

    expect(Array.isArray(result)).toBeTruthy();
  });

  test('Dictionary contains expected content', () => {
    const result = getDictionary();

    expect(result[14].headword).toBe('aka');
    expect(result[14].definition).toBe('<ekr, ók, óku, ekinn> vb (VI) to drive');
    expect(result[14].isCommon).toBeFalsy();

    expect(result[2800].headword).toBe('þrír');
    expect(result[2800].definition).toBe('<f þrjár, n þrjú, acc m þrjá, dat þrim(r), gen þriggja, ord þriði, third > num three');
    expect(result[2800].isCommon).toBeTruthy();
  });

  test('Dictionary has 259 "common" words', () => {
    const dictionary = getDictionary();
    const commonWords = dictionary.filter((entry) => entry.isCommon);
    expect(commonWords.length).toBe(259);
  });

  test('Dictionary contains 2 898 words', () => {
    const result = getDictionary();

    expect(result.length).toBe(2898);
  });

  test('Dictionary contains additional "einwherr" type entries', () => {
    const dictionary = getDictionary();

    ADDITIONAL_ENTRIES.forEach((entry) => expect(dictionary.includes(entry)).toBeTruthy());
  });

  test('Dictionary words are returned in correct object format', () => {
    const result = getDictionary();

    for (let i = 0; i < result.length; i += 1) {
      expect(result[i]).toHaveProperty('headword');
      expect(result[i]).toHaveProperty('definition');
      expect(result[i]).toHaveProperty('isCommon');
    }
  });
});
