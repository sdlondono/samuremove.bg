<script lang="ts">
  import CustomImage from "./components/CustomImage.svelte";
  import Dropzone from "./components/Dropzone.svelte";
  import Nav from "./components/Nav.svelte";
  import { image } from "./components/store";
  import { ImageState } from "./types/types";
</script>

<Nav />
<main class="grid grid-cols-1 max-w-xl m-auto w-full p-4 text-white">
  {#if $image.state === ImageState.READY}
    <h1>
      Hello 👋🏻, thank you very much for visiting my website, here you will be
      able to change the brackground of any image that would you like to modify,
      by the way, you must to add a <strong>PNG</strong>
      image.
    </h1>
    <Dropzone />
  {/if}
  {#if $image.state === ImageState.UPLOADING}
    <h1>loading...</h1>
  {/if}
  {#if $image.state === ImageState.UPLOADING_COMPLETED}
    <CustomImage />
  {/if}
</main>

<style>
</style>
