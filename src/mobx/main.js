import { observable, computed, autorun, action } from 'mobx';


// const store = observable({
//   title: 'front end developer',
//   display: false,
// });
// console.log(store);
// autorun(() => {
//   if (store.display) {
//     console.log(store.title);
//   }
// });
// store.display = true;
// console.log('-----');
// store.title = 'web developer';

// class CS {
//
//   @observable
//   a = 3;
//
//   @observable
//   b = 4;
//
//   @computed
//   get sum() {
//     return this.a + this.b;
//   }
//
//   @action
//   setSum(v) {
//     this.b = v;
//   }
// }
// // const store = new CS();
//
// const store = observable({
//   a: 3,
//   b: 4,
//   get sum() {
//     return this.a + this.b;
//   },
//   setSum(b) {
//     this.b = b;
//   },
// });
// //
// const another = () => {
//   autorun(() => {
//     store.setSum(5);
//     //
//     // if (store.b < 10) {
//     //   store.b += 1;
//     // }
//     // store.a = 4;
//   });
// };
//
// // 第一次执行时，只会更新 newObserving，执行完才会更新 observing，所以也就是第一次 store.b 根本不会触发重新执行。假如我们在外面执行 store.b = 6 就会发现执行两次。
// autorun(() => {
//   console.log(store.sum);
//
//   store.b = 5;
// });
//
// autorun(() => {
//   console.log(store.sum);
//   console.log(store.a);
//   store.b = 5; // 有这行反而不执行
// });
// store.a = 6;
// store.setSum(6);

const store = observable({
  a: 3,
  b: 4,
  get sum() {
    return this.a + this.b;
  },
});
autorun(() => {
  console.log('sum is', store.sum);
  store.b = 5;
});
store.a = 6;
