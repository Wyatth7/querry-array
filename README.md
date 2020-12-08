# querry-array

Given an array of strings and a query string, `querryArr` returns an array of all strings within the given string array that include the given query string.

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

const array = ['apples','bananas'];
const string = 'apples';

const queriedArray = querryArr(array, string);

console.log(queriedArray);

// Output: ['apples']
```
