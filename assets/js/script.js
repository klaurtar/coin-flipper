// TODO: Declare any global variables we need

// This is just a sanity check to make sure your JavaScript script is getting loaded
// You can remove it once you see it in your browser console in the developer tools

// TODO: Add event listener and handler for flip and clear buttons

// Flip Button Click Handler
// TODO: Determine flip outcome
// TODO: Update image and status message in the DOM

// Update the scorboard
// TODO: Calculate the total number of rolls/flips
// Make variables to track the percentages of heads and tails
// TODO: Use the calculated total to calculate the percentages
// HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
// TODO: Update the display of each table cell

// Clear Button Click Handler
// TODO: Reset global variables to 0
// TODO: Update the scoreboard (same logic as in flip button click handler)

// iife
(function () {
  // select all of my elements (hungarian notation $)
  const $flipButton = document.querySelector('#flip');
  const $clearButton = document.querySelector('#clear');
  const $pennyImage = document.querySelector('#penny-image');
  const $message = document.querySelector('#message');
  const $headsValue = document.querySelector('#heads');
  const $headsPercent = document.querySelector('#heads-percent');
  const $tailsValue = document.querySelector('#tails');
  const $tailsPercent = document.querySelector('#tails-percent');

  let scoreBoard = {
    heads: 0,
    percentageHeads: 0,
    tails: 0,
    percentageTails: 0,
    totalFlips: 0,
  };

  function changeScoreBoardNumbers() {
    $headsValue.textContent = `${scoreBoard.heads}`;
    $headsPercent.textContent = `${Math.round(scoreBoard.percentageHeads)}%`;
    $tailsValue.textContent = `${scoreBoard.tails}`;
    $tailsPercent.textContent = `${Math.round(scoreBoard.percentageTails)}%`;
  }

  function calculatePercentages() {
    scoreBoard.percentageHeads =
      (scoreBoard.heads / scoreBoard.totalFlips) * 100;

    scoreBoard.percentageTails =
      (scoreBoard.tails / scoreBoard.totalFlips) * 100;
  }

  function handleFlipButtonClick() {
    // figure out if we flipped heads or tails
    const headsOrTails = Math.random() < 0.5;

    // if heads...do this
    if (headsOrTails === true) {
      scoreBoard.totalFlips += 1;
      // number of heads to increase by 1
      scoreBoard.heads += 1;
      // precentage heads to increase
      calculatePercentages();
      // penny image to show heads
      $pennyImage.setAttribute('src', 'assets/images/penny-heads.jpg');
      // change the message to you flipped heads
      $message.textContent = 'You Flipped Heads!';

      // change the scoreboard on the page
      changeScoreBoardNumbers();
    } else {
      // if tails...do this
      scoreBoard.totalFlips += 1;
      // number of tails to increase by 1
      scoreBoard.tails += 1;
      // precentage tails to increase
      calculatePercentages();
      // penny image to show tails
      $pennyImage.setAttribute('src', 'assets/images/penny-tails.jpg');
      // change the message to you flipped tails
      $message.textContent = 'You Flipped Tails!';

      // change the scoreboard on the page
      changeScoreBoardNumbers();
    }
  }

  function handleClearButtonClick() {
    // change our scoreboard to 0 all across the board
    scoreBoard = {
      heads: 0,
      percentageHeads: 0,
      tails: 0,
      percentageTails: 0,
      totalFlips: 0,
    };

    changeScoreBoardNumbers();

    // change the message to 'Let's Get Rolling!'
    $message.textContent = `Let's Get Rolling!`;
  }

  function setUpListeners() {
    $flipButton.addEventListener('click', function () {
      handleFlipButtonClick();
    });

    $clearButton.addEventListener('click', function () {
      handleClearButtonClick();
    });
  }

  function init() {
    // set up my event listeners
    setUpListeners();
  }

  init();
})();
