export function sectionsIterator(inCollection) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < inCollection.length ? {
        value: inCollection[nextIndex++],
        done: false
      } : {
        done: true
      }

    }
  }
};
export function projectsIterator(inCollection) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < inCollection.length ? {
        value: inCollection[nextIndex++],
        done: false
      } : {
        done: true
      }

    }
  }
};
export function blogsIterator(inCollection) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < inCollection.length ? {
        value: inCollection[nextIndex++],
        done: false
      } : {
        done: true
      }

    }
  }
};
