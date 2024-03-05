console.log('bobbyhadz.com');

document.addEventListener('click', function handleClick(event) {
  const hasClass = event.target.classList.contains('box1');
  console.log(hasClass);

  if (hasClass) {
    console.log('Event.target has the specified class');
  } else {
    console.log(
      'Event.target does NOT have the specified class',
    );
  }
});
