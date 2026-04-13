//! closure
function counter() {
  let count = 0;
  const child = () => {
    count++;
    console.log(count);
  };
  return child;
}
const a = counter();
const b = counter();
a();
a();
a();
a();
b();
