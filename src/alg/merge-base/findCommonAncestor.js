const PARENT1 = 0x1;
const PARENT2 = 0x10;
const STALE = 0x100;
class Queue {
  constructor() {
    this.array = [];
  }
  put(item) {
    this.array.push(item);
    let parent;
    for (let ix = this.array.length - 1; ix; ix = parent) {
      parent = Math.floor((ix - 1) / 2);
      if (this.array[ix].date <= this.array[parent].date) {
        break;
      }
      this.swap(parent, ix);
    }
  }
  swap(i, j) {
    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }
  get() {
    return this.array.shift();
  }
  hasNonStale() {
    for (let i = 0; i < this.array.length; i++) {
      if (!(this.array[i].flags & STALE)) {
        return true;
      }
    }
    return false;
  }
}

const findCommonAncestor = (h1, h2) => {
  const queue = new Queue();
  const result = [];
  h1.flags |= PARENT1;
  h2.flags |= PARENT2;
  queue.put(h1);
  queue.put(h2);
  while (queue.hasNonStale()) {
    const commit = queue.get();
    const flags = commit.flags & (PARENT1 | PARENT2 | STALE);
    if (flags === (PARENT1 | PARENT2)) {
      commit.flags |= STALE;
      result.push(commit);
    }
    commit.parents.forEach((sCommit) => {
      if ((sCommit.flags & flags) === flags) {
        return;
      }
      sCommit.flags |= flags;
      queue.put(sCommit);
    });
  }
  return result;
};

export default findCommonAncestor;
