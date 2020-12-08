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

// String array and query string to be used.

const array = ['apples','banannas'];
const string = 'apples';

// Passing the string array and query string to querryArr, and storing the returned array in 'queriedArray'.

const queriedArray = querryArr(array, string);

// Logs new array to console.

console.log(queriedArray);
```
