async function doAsyncTask() {
  const response = await fetch('https://www.reddit.com/r/Overwatch.json');
  return response.json();
}

doAsyncTask()
  .then(data => console.log(data))
  .catch(e => console.error(e));

