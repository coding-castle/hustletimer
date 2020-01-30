<style>
  .question {
    @apply font-bold text-left mt-4 mb-2;
  }
  .answer {
    @apply text-left;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>
<div class="w-full max-w-md mx-auto">
  <h2 class="text-6xl">About</h2>
  <p class="question">What is the Pomodoro Technique?</p>
  <p class="answer">
    The Pomodoro Technique is a time management method developed by
    <a href="https://francescocirillo.com/" target="_blank">
      Francesco Cirillo
    </a>
    in the late 1980s. The technique uses a timer to break down work into
    intervals, traditionally 25 minutes in length, separated by short breaks.
    Each interval is known as a pomodoro, from the Italian word for 'tomato',
    after the tomato-shaped kitchen timer that Cirillo used as a university
    student.
  </p>
  <small>
    Source:
    <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">
      Wikipedia
    </a>
  </small>
  <p class="question">Motivation for this App</p>
  <p class="answer">
    I felt the need for a minimalistic pomodoro timer for both mobile and
    desktop devices. This Website is a Progressive Web App which means it can be
    installed on the homescreen and desktop.
  </p>
  <div class="mb-4">
    <small>
      <a href="imprint">Imprint</a>
    </small>
    <small>
      <a href="privacy">Privacy</a>
    </small>
  </div>
</div>
