function myEach(collection, callback) {
  if (Array.isArray(collection)) {
      for (let item of collection) {
          callback(item);
      }
  } else {
      for (let key in collection) {
          callback(collection[key]);
      }
  }
  return collection;
}

// Define myMap
function myMap(collection, callback) {
  let result = [];
  myEach(collection, item => result.push(callback(item)));
  return result;
}

// Define myReduce
function myReduce(collection, callback, acc) {
  let keys = Object.keys(collection);
  let index = 0;
  if (acc === undefined) {
      acc = collection[keys[0]];
      index = 1;
  }
  for (; index < keys.length; index++) {
      acc = callback(acc, collection[keys[index]], collection);
  }
  return acc;
}

// Define myFind
function myFind(collection, predicate) {
  for (let item of Object.values(collection)) {
      if (predicate(item)) return item;
  }
  return undefined;
}

// Define myFilter
function myFilter(collection, predicate) {
  let result = [];
  myEach(collection, item => {
      if (predicate(item)) result.push(item);
  });
  return result;
}

// Define mySize
function mySize(collection) {
  return Object.keys(collection).length;
}

// Define myFirst
function myFirst(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
}

// Define myLast
function myLast(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(-n);
}

// Define myKeys
function myKeys(object) {
  return Object.keys(object);
}

// Define myValues
function myValues(object) {
  return Object.values(object);
}

// Export all functions for testing
module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  myKeys,
  myValues
};
