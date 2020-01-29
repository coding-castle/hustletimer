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
  const HUSTLEMINS = 2;
  const SHORTBREAKMINS = 0.5;
  const LONGBREAKMINS = 1;
  let interval;
  function changeRunning() {
    if ($running) {
      $running = false;
      clearInterval($timerInterval);
    } else {
      $running = true;
      $timerInterval = setInterval(() => {
        $time = $time - 1;
        if ($time === 0) {
          changeStatus();
        }
      }, 1000);
    }
  }

  function changeStatus() {
    if ($current === "hustle") {
      $current = "relax";
      $remainingPomos--;
      if ($remainingPomos === 0) {
        // long break
        $remainingPomos = 4;
        $time = LONGBREAKMINS * 60;
      } else {
        // short break
        $time = SHORTBREAKMINS * 60;
      }
    } else if ($current === "relax") {
      $current = "hustle";
      $time = HUSTLEMINS * 60;
    }
  }

  function reset() {
    $running = false;
    $time = HUSTLEMINS * 60;
    clearInterval($timerInterval);
    $timerInterval = null;
  }
</script>

<style>
  .time {
    font-size: 10rem;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
<div class="flex flex-row max-w-lg justify-around mx-auto">
  <ProgressItem done={$remainingPomos <= 3} />
  <ProgressItem done={$remainingPomos <= 2} />
  <ProgressItem done={$remainingPomos <= 1} />
  <ProgressItem done={$remainingPomos <= 0} />
</div>
<div class="time">
  {Math.floor($time / 60) < 10 ? '0' + Math.floor($time / 60) : Math.floor($time / 60)}:{$time % 60 < 10 ? '0' + ($time % 60) : $time % 60}
</div>
<div>{$current}</div>

<Btn on:click={changeRunning} type="button" data-theme="primary">
  {$running === true ? 'Pause' : 'Start'}
</Btn>
<Btn on:click={reset} type="button" data-theme="secondary">Reset</Btn>
