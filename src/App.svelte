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
    <h1 class="text-md">
      Hi there 👋🏻, welcome to my website! I'm excited to offer you a fun and
      easy way to modify your images. With just a few clicks, you can change the
      background of any <strong>PNG</strong> image to a color randomly. It's a simple
      and creative way to make your images stand out.
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
