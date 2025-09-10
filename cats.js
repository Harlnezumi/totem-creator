// some URLs for APIs
let catsApiUrl = 'https://catfact.ninja/fact?max_length=64'
let dogsApiUrl = 'https://dogapi.dog/api/v2/facts?limit=64'

  // request cats API(i used this website to find information how to use APIs in JS: https://www.freecodecamp.org/news/make-api-calls-in-javascript/)
async function catsApi() {
  try {
    const response = await fetch(catsApiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(`Interesting cat fact: ${data['fact']}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

//request dogs API
async function dogsApi() {
  try {
    const response = await fetch(dogsApiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(`Interesting dog fact: ${data['data'][0]['attributes']['body']}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

// sleep function
function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function askFact() {
  let whichFact = prompt('Which facts would you like to read? write "D" for dogs, "C" for cats, or "Q" to quit: \n');
  whichFact = whichFact.toUpperCase();

  if (whichFact === 'C') {
      await catsApi();
      await sleep(3);
  } else if (whichFact === 'D') {
      await dogsApi();
      await sleep(3);
  } else if (whichFact === 'Q') {
    console.log('Goodbye!');
    return;
  } else {
    console.log('Invalid input. Please enter "D", "C", or "Q".');
  }
  // Call the function again until user inputs "Q"
  askFact();
}
askFact();
