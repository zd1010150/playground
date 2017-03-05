
const guard = document.querySelector('#end-guard');
const ulList = document.querySelector('#infiniteList');
const isVisible = (boundingClientRect, intersectionRect) => (
  ((intersectionRect.width * intersectionRect.height) /
          (boundingClientRect.width * boundingClientRect.height)) >= 0.5
);

let index = 1;
const appendLi = () => {
  for (let i = 0; i < 10; i += 1) {
    const li = document.createElement('li');
    index += 1;
    li.textContent = index;
    ulList.appendChild(li);
  }
};

const handlePosChange = (entries) => {
  entries.forEach((entry) => {
    if (entry.target === guard) {
      if (isVisible(entry.boundingClientRect, entry.intersectionRect)) {
        appendLi();
      }
    }
  });
  console.log(entries);
};

const io = new IntersectionObserver(handlePosChange, {
  threshold: [0.5],
});

io.observe(guard);
