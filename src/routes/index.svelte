<script>
  import Btn from "../components/Btn.svelte";
  import ProgressItem from "../components/ProgressItem.svelte";
  import {
    time,
    running,
    timerInterval,
    current,
    remainingPomos
  } from "../stores";
  const HUSTLEMINS = 25;
  const SHORTBREAKMINS = 5;
  const LONGBREAKMINS = 15;
  let interval;
  let startAudio;
  let endAudio;
  let worker;
  function changeRunning() {
    // if current is not set it means that the timer is fresh and we need to ring the bell on start
    if ($current === "ready, set") {
      // init
      playStart();
      $current = "hustle";
      $time = HUSTLEMINS * 60;
      if (worker) {
        worker.postMessage(["stop"]);
        worker.terminate();
        worker = undefined;
      }
      worker = new Worker("timeWorker.js");
      worker.onmessage = function(event) {
        $time = event.data;
        if ($time === 0) {
          changeStatus();
        }
      };
    }

    if ($running) {
      $running = false;
      worker.postMessage(["stop"]);
      // clearInterval($timerInterval);
    } else {
      $running = true;
      worker.postMessage(["start", $time]);
      // $timerInterval = setInterval(() => {
      //   $time = $time - 1;
      //   if ($time === 0) {
      //     changeStatus();
      //   }
      // }, 1000);
    }
  }

  function changeStatus() {
    if ($current === "hustle") {
      playEnd();
      $current = "relax";
      $remainingPomos--;
      if ($remainingPomos === 0) {
        // long break
        $time = LONGBREAKMINS * 60;
      } else {
        // short break
        $time = SHORTBREAKMINS * 60;
      }
    } else if ($current === "relax") {
      playStart();
      if ($remainingPomos === 0) {
        $remainingPomos = 4;
      }
      $current = "hustle";
      $time = HUSTLEMINS * 60;
    }
    worker.postMessage(["start", $time]);
  }

  function reset() {
    $running = false;
    $time = HUSTLEMINS * 60;
    $remainingPomos = 4;
    $current = "ready, set";
    worker.postMessage(["stop"]);
    // clearInterval($timerInterval);
    // $timerInterval = null;
  }

  function playStart() {
    startAudio.play();
  }

  function playEnd() {
    endAudio.play();
  }
</script>

<style>
  .time {
    font-size: 6rem;
    @apply font-bold;
  }
  @screen sm {
    .time {
      font-size: 8rem;
    }
  }
  @screen md {
    .time {
      font-size: 10rem;
    }
  }
  @screen xl {
    .time {
      font-size: 12rem;
    }
  }
  .status {
    font-size: 4rem;
    letter-spacing: 1rem;
    @apply mb-12 uppercase;
  }
</style>

<svelte:head>
  <title>Hustle Timer - Pomodoro Timer App</title>
</svelte:head>

<audio bind:this={startAudio}>
  <source src="start.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>
<audio bind:this={endAudio}>
  <source src="done.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>
<div class="flex flex-row max-w-lg justify-around mx-auto">
  <ProgressItem
    done={$remainingPomos <= 3}
    inProgress={$remainingPomos === 4} />
  <ProgressItem
    done={$remainingPomos <= 2}
    inProgress={$remainingPomos === 3} />
  <ProgressItem
    done={$remainingPomos <= 1}
    inProgress={$remainingPomos === 2} />
  <ProgressItem
    done={$remainingPomos <= 0}
    inProgress={$remainingPomos === 1} />
</div>
<div class="time">
  {Math.floor($time / 60) < 10 ? '0' + Math.floor($time / 60) : Math.floor($time / 60)}:{$time % 60 < 10 ? '0' + ($time % 60) : $time % 60}
</div>
<div class="status">{$current}</div>

<Btn
  class="mb-4 uppercase"
  on:click={changeRunning}
  type="button"
  data-theme="primary">
  {$running === true ? 'Pause' : $current === 'ready, set' ? 'Go' : 'Continue'}
</Btn>
<Btn
  class="mb-4 uppercase"
  on:click={reset}
  type="button"
  data-theme="secondary">
  Reset
</Btn>
