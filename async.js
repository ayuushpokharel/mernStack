//! sync
//blocking

//* async
// non blocking
//! setTimeout (callback, timer, args) & clearTimeout(timer_id)
// console.log("start");
// const timer_id = setTimeout(
//   (name) => {
//     console.log(`Hey ${name}`);
//   },
//   2000,
//   "romish",
// );

// console.log(timer_id); // _destroyed: false,
// clearTimeout(timer_id);
// console.log(timer_id); // _destroyed: true,
console.log("end");

// 1-10 for loop
//! setInterval(callback, interval) && clearInterval(interval_id) => used for countdown timer
// let count = 1;
// const interval_id = setInterval(() => {
//   console.log(count);
//   if (count === 10) {
//     clearInterval(interval_id);
//   }
//   count++;
// }, 1);

//* Example => asynchronous programming => callback hell, pyramid of doom

console.log("start");
const getUser = (callback) => {
  setTimeout(() => {
    console.log("fetching user..");
    callback([null, {
      _id: 1,
      name: "john",
      email: "john123@gmail.com",
    }]);
  }, 3000);
};

//get userPost
const getPost = (userId, callback) => {
  setTimeout(() => {
    console.log("fetching post..");
    callback([null, { userId, title: "abc", id: 1 }]);
  }, 2000);
};

//? get comments
const getComments = (postId, callback) => {
  setTimeout(() => {
    console.log("fetching comments...");
    callback([null, { id: 1, postId, comments: "hello world" }]);
  }, 1000);
};

getUser((error, user) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("User: ", user);
  getPost(user._id, (error, post) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Post: ", post);
    getComments(post.id, (error, comments) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Comment: ", comments);
    });
  });
});
console.log("end");
