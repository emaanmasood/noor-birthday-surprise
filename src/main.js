
import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="min-h-screen overflow-hidden bg-gradient-to-br from-[#eee3ff] via-[#faf5ff] to-[#fce7f3] text-purple-950">

    <!-- FIRST SCREEN: SECRET CODE -->
    <section id="lockScreen" class="flex min-h-screen items-center justify-center p-5">
      <div class="glass-card relative w-full max-w-md rounded-[2rem] border border-white/80 p-8 text-center shadow-2xl sm:p-10">

        <div class="absolute -right-3 -top-5 text-4xl float-animation">💜</div>
        <div class="absolute -bottom-4 -left-3 text-4xl float-delay">🎀</div>

        <div class="mb-5 text-7xl float-animation">🧸</div>

        <p class="text-xs font-bold uppercase tracking-[0.3em] text-purple-500">
          A little surprise
        </p>

        <h1 class="mt-4 text-4xl font-black text-purple-800">
          Hello, Noor! 💜
        </h1>

        <p class="mx-auto mt-4 max-w-xs leading-7 text-purple-600">
          Someone special has made a little birthday surprise just for you.
          Can you unlock it? 💌
        </p>

        <form id="codeForm" class="mt-8 space-y-4">
          <label for="secretCode" class="block text-sm font-semibold text-purple-700">
            Enter your secret code
          </label>

          <input
            id="secretCode"
            type="password"
            placeholder="Type your special code..."
            autocomplete="off"
            class="w-full rounded-2xl border-2 border-purple-200 bg-white/80 px-5 py-4 text-center text-lg outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
            required
          />

          <button
            type="submit"
            class="w-full rounded-2xl bg-purple-600 px-5 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-purple-700 active:scale-95"
          >
            Open My Surprise 💌
          </button>

          <p id="errorMessage" class="hidden text-sm font-semibold text-pink-600">
            Oops! Try the correct code, Noor. 💕
          </p>
        </form>

        <p class="mt-7 text-sm text-purple-400">
          Made with love by Teddy Bear 🧸
        </p>
      </div>
    </section>

    <!-- SECOND SCREEN: BIRTHDAY SURPRISE -->
    <section id="birthdayScreen" class="hidden relative min-h-screen px-4 py-10 sm:px-8">
    
<!-- Floating decorations -->
<div id="floatingHearts" class="pointer-events-none fixed inset-0 z-20 overflow-hidden"></div>

<!-- Background music player -->
<button
  id="musicButton"
  class="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-3 text-sm font-bold text-purple-700 shadow-xl backdrop-blur-xl transition hover:scale-105"
  type="button"
>
  <span id="musicIcon">♫</span>
  <span id="musicLabel">Play Birthday Music</span>
</button>

<audio id="birthdayMusic" loop preload="none">
  <source src="/birthday-music.mp3" type="audio/mpeg">
</audio>


      <div class="pointer-events-none absolute left-[5%] top-24 text-4xl float-animation">♡</div>
      <div class="pointer-events-none absolute right-[7%] top-44 text-4xl float-delay">💜</div>
      <div class="pointer-events-none absolute bottom-28 left-[10%] text-3xl float-delay">✨</div>
      <div class="pointer-events-none absolute bottom-20 right-[10%] text-4xl float-animation">♡</div>

      <div class="relative mx-auto max-w-3xl">

        <!-- WISHING LETTER AT TOP -->
        <header class="letter-reveal mb-8 rounded-[2rem] border border-white bg-white/70 p-6 shadow-xl backdrop-blur-xl sm:p-10">
          <div class="mb-4 text-center text-4xl">💌</div>

          <p class="text-center text-xs font-bold uppercase tracking-[0.3em] text-purple-500">
            A letter from Teddy Bear
          </p>

          <h1 class="mt-4 text-center font-serif text-3xl font-bold leading-tight text-purple-800 sm:text-5xl">
            To My Dearest Noor
            <span class="block mt-2 text-pink-400">With All My Love ♡</span>
          </h1>

          <div class="mx-auto mt-5 h-1 w-20 rounded-full bg-purple-300"></div>

          <p class="mt-6 text-center leading-8 text-purple-700">
            My sweetest Noor, I made this little world of lavender
            just for you. Today is your special day, and I wish I
            could fill every moment with flowers, hugs, smiles and
            all the happiness your beautiful heart deserves.
          </p>
        </header>

        <!-- CUTE GIRL IMAGE -->
        <div class="letter-reveal mx-auto max-w-lg text-center">
          <div class="relative mx-auto w-full max-w-sm">

            <div class="absolute -inset-3 rounded-[3rem] bg-gradient-to-br from-pink-200 via-purple-300 to-violet-200 blur-xl opacity-70"></div>

            <div class="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-purple-100 shadow-2xl">
              <img
                src="Noor.jpg"
                alt="A lovely girl in a dreamy birthday portrait"
                class="girl-photo h-[350px] w-full object-cover sm:h-[430px]"
              />

              <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-purple-950/80 to-transparent px-5 pb-6 pt-16">
                <p class="font-serif text-3xl font-bold text-white">
                  Our Birthday Princess 👑
                </p>
                <p class="mt-2 text-sm text-purple-100">
                  You make the world more beautiful ♡
                </p>
              </div>
            </div>

            <span class="absolute -left-5 top-10 text-4xl float-animation">🎀</span>
            <span class="absolute -right-4 bottom-16 text-4xl float-delay">💗</span>
          </div>
        </div>

        <!-- BIRTHDAY WISH BELOW IMAGE -->
        <section class="letter-reveal mt-10 rounded-[2rem] border border-white bg-white/75 p-6 text-center shadow-xl backdrop-blur-lg sm:p-10">

          <p class="text-xs font-bold uppercase tracking-[0.3em] text-pink-500">
            Today is all about you
          </p>

          <h2 class="mt-4 text-4xl font-black leading-tight text-purple-800 sm:text-6xl">
            Happy Birthday
            <span class="mt-2 block text-pink-500">Noor! 🎂</span>
          </h2>

          <div class="my-7 text-6xl">
            <span class="inline-block cake-bounce">🎂</span>
            <span class="inline-block">🎁</span>
            <span class="inline-block cake-bounce">💐</span>
          </div>

          <p class="mx-auto max-w-xl leading-8 text-purple-700">
            Happy Birthday to the most precious girl! May your life
            always be filled with sunshine, sweet memories, beautiful
            dreams and endless reasons to smile. You deserve every
            lovely thing this world has to offer. Keep shining, my
            princess, because your happiness means so much to me. 💜
          </p>

          <div class="my-7 rounded-2xl bg-purple-50 p-5">
            <p class="font-serif text-xl italic leading-8 text-purple-700">
              "If I could make one birthday wish, it would be to see
              your smile every day." 💗
            </p>
          </div>

          <p class="font-serif text-xl italic text-purple-600">
            Forever with love,
          </p>

          <p class="mt-2 text-2xl font-black text-pink-500">
            Your Teddy Bear 🧸
          </p>

          <button
            id="giftButton"
            class="mt-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >
            One More Surprise 🎁
          </button>

          <div id="giftMessage" class="hidden mt-6 rounded-2xl border border-purple-200 bg-purple-50 p-6">
            <div class="text-5xl">💜🧸💐</div>
            <h3 class="mt-4 text-2xl font-bold text-purple-800">
              A Big Hug for Noor!
            </h3>
            <p class="mt-3 leading-7 text-purple-700">
              No matter how many birthdays pass, I hope you always
              feel loved, appreciated and special. Sending you the
              warmest hug from your Teddy Bear. Happy Birthday, Noor! ♡
            </p>
            <div id="hearts" class="mt-4 text-2xl">💗 💜 💗 💜 💗</div>
          </div>
        </section>

        <footer class="py-10 text-center text-sm text-purple-500">
          Made with endless love for Noor ♡
          <p class="mt-2">Your little lavender birthday world ✨</p>
        </footer>

      </div>
    </section>
  </main>
`

const form = document.querySelector('#codeForm')
const input = document.querySelector('#secretCode')
const errorMessage = document.querySelector('#errorMessage')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (input.value.trim() === 'Dear Noor') {
    document.querySelector('#lockScreen').classList.add('hidden')
    document.querySelector('#birthdayScreen').classList.remove('hidden')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    errorMessage.classList.remove('hidden')
    input.classList.add('border-pink-400')
    input.focus()
  }
})

input.addEventListener('input', () => {
  errorMessage.classList.add('hidden')
  input.classList.remove('border-pink-400')
})

document.querySelector('#giftButton').addEventListener('click', () => {
  const gift = document.querySelector('#giftMessage')
  gift.classList.toggle('hidden')

  if (!gift.classList.contains('hidden')) {
    gift.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
})


const music = document.querySelector('#birthdayMusic')
const musicButton = document.querySelector('#musicButton')
const musicIcon = document.querySelector('#musicIcon')
const musicLabel = document.querySelector('#musicLabel')

let musicPlaying = false

musicButton.addEventListener('click', async () => {
  try {
    if (!musicPlaying) {
      await music.play()
      musicPlaying = true
      musicIcon.textContent = '♫ ♪'
      musicLabel.textContent = 'Pause Music'
    } else {
      music.pause()
      musicPlaying = false
      musicIcon.textContent = '♫'
      musicLabel.textContent = 'Play Birthday Music'
    }
  } catch {
    musicLabel.textContent = 'Add birthday-music.mp3'
  }
})

const heartsContainer = document.querySelector('#floatingHearts')
const heartSymbols = ['💜', '♡', '✨', '💕', '✦']

function createFloatingHeart() {
  const heart = document.createElement('span')
  heart.textContent =
    heartSymbols[Math.floor(Math.random() * heartSymbols.length)]

  heart.className = 'floating-particle'
  heart.style.left = Math.random() * 100 + '%'
  heart.style.fontSize = (14 + Math.random() * 22) + 'px'
  heart.style.setProperty('--duration', (6 + Math.random() * 6) + 's')

  heartsContainer.appendChild(heart)

  heart.addEventListener('animationend', () => heart.remove())
}

let heartTimer

function startFloatingHearts() {
  if (heartTimer) return
  for (let i = 0; i < 12; i++) createFloatingHeart()
  heartTimer = setInterval(createFloatingHeart, 650)
}

function stopFloatingHearts() {
  clearInterval(heartTimer)
  heartTimer = null
}

const originalUnlock = document.querySelector('#codeForm')

originalUnlock.addEventListener('submit', () => {
  if (document.querySelector('#secretCode').value.trim() === 'Dear Noor') {
    startFloatingHearts()
  }
})
