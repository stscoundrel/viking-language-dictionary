# Viking Language Dictionary

Old Norse Dictionary for Node.js. Over 2800 Old Norse words with English translations. 

Based on "Viking Language" book by Jesse L. Byock


### Install

`yarn add viking-language-dictionary`

##### Usage

```javascript
import { getDictionary } from 'viking-language-dictionary'

// Get an array of all dictionary entries.
const dictionary = getDictionary()

// Manipulate data as you wish -> perhaps get all words staring with 'o'
const oWords = dictionary.filter((entry) => entry.word.charAt(0) === 'o')

// Or output a single word:
console.log(dictionary[8])
// {
//     "headword": "afbragð",
//     "definition": "n outstanding example; afbragð þeira manna allra the most outstanding of all those men",
//     "isCommon": false
// }

```

Individual words are returned in format of:

```javascript
{
    headword: string;
    definition: string;
    isCommon: boolean; // tells if word is among the 260 most common Old Norse words.
}
```


### About "Viking Language"

"Viking Language" is a book series by [Jesse L. Byock](http://www.viking.ucla.edu/), which teaches basics of Old Norse language. The books are accompanied by a small dictionary at the end, providing learners a place to look for translations of the books passages.

This library is sourced from a [blog post](https://oldnorse.org/2020/09/06/the-old-norse-dictionary/) by the books publisher, [Jules William Press](https://juleswilliampress.com/).