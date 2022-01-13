document.addEventListener('DOMContentLoaded', () => {
   const gameImage = ['img/rock.png', 'img/scissors.png', 'img/paper.png'];
   const gameBody = document.querySelector('.game-body');
   const buttonPlay = document.querySelector('.button-play');
   const gameTitle = document.querySelector('.game-title');
   let countComputer = 0;
   let countPlayer = 0;
   const randomNumber = () => {
      return Math.floor(Math.random() * gameImage.length);
   }
   const game = () => {
      const buttonRow = document.querySelector('.button-row');
      const imageRow = document.querySelector('.image-row');

      gameBody.closest('.game').insertAdjacentHTML('beforebegin', `
      <div class="row">
      <div class="game-block">
        <p class="player">Player</p>
        <p class="player-score score">0</p>
      </div>
      <div class="game-block">
        <p class="computer">Computer</p>
        <p class="computer-score score">0</p>
      </div>
    </div>
      `);

      gameTitle.textContent = 'Choose an option';
      buttonPlay.style.display = 'none';
      buttonRow.style.justifyContent = 'space-between';
      buttonRow.style.marginTop = '70px';
      imageRow.innerHTML = `
            <img class="left-hand" src="${gameImage[0]}" alt="">
            <img class="ss" src="${gameImage[0]}" alt="">
      `;
      buttonRow.innerHTML = `
            <button class="button play-btn">Paper</button>
            <button class="button play-btn">Scissors</button>
            <button class="button play-btn">Rock</button>
      `;

      const scorePlayer = document.querySelector('.player-score');
      const scoreComputer = document.querySelector('.computer-score');

      document.querySelectorAll('.play-btn').forEach(item => {
         item.addEventListener('click', (e) => {
            const target = e.target;
       

            imageRow.childNodes[1].classList.add('left-hand-anim')
            imageRow.childNodes[3].classList.add('right-hand-anim')

            setTimeout(() => {
               if (target.innerHTML.toLowerCase() == 'paper') {
                  imageRow.childNodes[1].src = gameImage[2];
               }
               else if (target.innerHTML.toLowerCase() == 'scissors') {
                  imageRow.childNodes[1].src = gameImage[1];
               }
               else {
                  imageRow.childNodes[1].src = gameImage[0];
               }
               const randomImage = gameImage[randomNumber()];
               imageRow.childNodes[3].src = randomImage;

               imageRow.childNodes[1].classList.remove('left-hand-anim');
               imageRow.childNodes[3].classList.remove('right-hand-anim');

                
                const choosedPlayer = item.textContent.toLowerCase();
                
               if(choosedPlayer == 'scissors' && randomImage == 'img/rock.png') {
                  countComputer++;
                  scoreComputer.textContent = countComputer;
               }
               else if (choosedPlayer == 'rock' && randomImage == 'img/paper.png') {
                  countComputer++;
                  scoreComputer.textContent = countComputer;
               }
               else if (choosedPlayer == 'paper' && randomImage == 'img/scissors.png') {
                  countComputer++;
                  scoreComputer.textContent = countComputer;
               }
               else if (choosedPlayer == 'scissors' && randomImage == 'img/paper.png') {
                  countPlayer++;
                  scorePlayer.textContent = countPlayer;
               }
               else if (choosedPlayer == 'rock' && randomImage == 'img/scissors.png') {
                  countPlayer++;
                  scorePlayer.textContent = countPlayer;
               }
               else if (choosedPlayer == 'paper' && randomImage == 'img/rock.png') {
                  countPlayer++;
                  scorePlayer.textContent = countPlayer;
               }
            }, 1100);
            
           


         })
      });
   }


   buttonPlay.addEventListener('click', game)

})
