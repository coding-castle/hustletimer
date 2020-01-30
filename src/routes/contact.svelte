<script>
  import Btn from "../components/Btn.svelte";

  function submit() {
    console.log(name, email, message);
  }
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>
<h2 class="text-6xl">Contact</h2>
<p>Send feedback, questions or just say hi 👋</p>

<div class="w-full max-w-xs mx-auto">
  <form
    method="POST"
    name="contact"
    class="px-8 pt-6 pb-8 mb-4"
    data-netlify="true">
    <div class="mb-4">
      <label class="block text-hyellow text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input
        class="shadow bg-hdark border-hyellow appearance-none border w-full py-2
        px-3 text-hyellow leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        name="name"
        placeholder="Your Name..." />
    </div>
    <div class="mb-4">
      <label class="block text-hyellow text-sm font-bold mb-2" for="email">
        E-Mail
      </label>
      <input
        class="shadow bg-hdark border-hyellow appearance-none border w-full py-2
        px-3 text-hyellow leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="text"
        name="email"
        placeholder="Your E-Mail..." />
    </div>
    <div class="mb-6">
      <label class="block text-hyellow text-sm font-bold mb-2" for="message">
        Message
      </label>
      <textarea
        class="shadow appearance-none border border-hyellow bg-hdark w-full py-2
        px-3 text-hyellow mb-3 leading-tight focus:outline-none
        focus:shadow-outline"
        id="message"
        name="message"
        placeholder="Some Feedback..." />
    </div>
    <div class="flex items-center justify-center">
      <Btn type="submit" data-theme="primary">Send</Btn>
    </div>
  </form>
</div>
