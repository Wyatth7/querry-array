# querry-array

Queries a string array with a given string

# Installation

```
npm i query-array-with-strings-wh7
```

# Functionality

In order for this method to function properly, both the array and string must be of type string.

Upon completion, `querryArr()` will return an array of strings that match the given string parameter.

# Usage

```
import { querryArr } from "query-array-with-strings-wh7";

const array = ['apples','banannas'];
const string = 'apples';

const queriedArray = querryArr(array, string);

console.log(queriedArray);

// Output: ['apples']
```
