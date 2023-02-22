<script lang="ts">
  import { image } from "./store";
  let processingImage = true;
  let tries = 0;
  let intervalId = undefined;
  $: {
    if (processingImage) {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        tries++;
        const img = new Image();
        img.src = $image.modifiedImages[0];
        img.onload = () => {
          processingImage = false;
          clearInterval(intervalId);
        };
      }, 500);
    }
  }
  console.log($image.modifiedImages);
</script>

<div class="grid grid-cols-3 gap-4">
  {#if !processingImage}
    {#each $image.modifiedImages as $modifiedimage}
      <div class="bg-orange-400">
        <img src={$modifiedimage} alt="user" />
      </div>
    {/each}
  {:else}
    <div>Processing image...</div>
  {/if}
</div>
