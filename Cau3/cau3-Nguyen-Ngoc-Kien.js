let move_box_one = () => {
  const square = document.querySelector('.square');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      square.classList.add('move-1');
      resolve();
    }, 2000);
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        square.classList.remove('move-1');
        square.classList.add('move-2');
        resolve();
      }, 2000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        square.classList.remove('move-2');
        square.classList.add('move-3');
        resolve();
      }, 2000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        square.classList.remove('move-3');
        square.classList.add('move-4');
        resolve();
      }, 2000);
    });
  });
};

move_box_one();