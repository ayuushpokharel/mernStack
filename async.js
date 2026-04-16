//! sync
//blocking

//* async
// non blocking
//! setTimeout (callback, timer, args) & clearTimeout(timer_id)
console.log("start");
const timer_id = setTimeout(
  (name) => {
    console.log(`Hey ${name}`);
  },
  2000,
  "romish",
);

// console.log(timer_id); // _destroyed: false,
// clearTimeout(timer_id);
// console.log(timer_id); // _destroyed: true,
console.log("end");

// 1-10 for loop
//! setInterval(callback, interval) && clearInterval(interval_id) => used for countdown timer
let count = 1;
const interval_id = setInterval(() => {
  console.log(count);
  if (count === 10) {
    clearInterval(interval_id);
  }
  count++;
}, 1);

//* countdown timer => hw

console.log("start");
const getUser = (callback) => {
  setTimeout(() => {
    console.log("fetching");
    callback({
      _id: 1,
      name: "john",
      email: "john123@gmail.com",
    });
  }, 4000);
};
getUser();

//get userPost
const getPost = (userId) => {
  setTimeout(() => {
    console.log({ userId, title: "abc", id: 1 });
  }, 3000);
};
getUser((user) => {
  console.log(user);
  getPost(user._id);
});
console.log("end");

//? get comments
