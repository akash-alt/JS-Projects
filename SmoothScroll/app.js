
function smoothScroll(target,duration){
  let target1 = document.querySelector(target)
  let targetPosition = target1.getBoundingClientRect().top;
  let startPosition = window.pageXOffset;
  let distance = targetPosition - startPosition
  let startTime = null

  console.log(distance);

  console.log(target1);
  console.log(targetPosition);

}

smoothScroll('.section2',1000)