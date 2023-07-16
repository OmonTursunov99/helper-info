window.addEventListener('scroll', (e) => {
  const scrollY = window.scrollY;
  const clientHeight = document.documentElement.clientHeight;
  const scrollHeight = document.documentElement.scrollHeight;
  const ctrlLoad = (scrollY + clientHeight) >= (scrollHeight - 100);
  if (ctrlLoad) {

  }
});
