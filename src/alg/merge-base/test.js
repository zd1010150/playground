import { expect } from 'chai';
import findCommonAncestor from './findCommonAncestor';

let time = 0;
class Commit {
  constructor(id, parents) {
    this.id = id;
    this.data = 'data';
    time += 1;
    this.date = time;
    this.parents = [].concat(parents);
  }
}

const B = new Commit('B', []);
const C = new Commit('C', B);
const E = new Commit('E', B);
const D = new Commit('D', [C, E]);
const F = new Commit('F', [C, E]);

describe('alg', () => {
  describe('merge-base', () => {
    it('findCommonAncestor', () => {
      expect(findCommonAncestor(D, F)).to.eql([C, E]);
    });
  });
});
