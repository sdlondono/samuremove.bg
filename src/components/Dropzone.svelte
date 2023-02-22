<script lang="ts">
  import { Cloudinary } from "@cloudinary/url-gen";
  import { scale } from "@cloudinary/url-gen/actions/resize";
  import { onMount } from "svelte";
  import { ImageState } from "../types/types";
  import { image } from "./store";
  import Dropzone from "dropzone";
  import { randomColor } from "../utils/utils";

  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: "ddv6amwz9",
    },
    url: {
      secure: true,
    },
  });

  const getURLByRandomColor = (publicId: string): string => {
    return cloudinary
      .image(publicId)
      .resize(scale().width(450).height(450))
      .backgroundColor(randomColor())
      .toURL();
  };

  onMount(() => {
    //@ts-ignore
    const dropzone = new Dropzone("#dropzone", {
      uploadMultiple: false,
      acceptedFiles: ".png",
      maxFiles: 1,
    });

    dropzone.on("sending", (_, __, formData) => {
      image.update((pre) => ({ ...pre, state: ImageState.UPLOADING }));
      formData.append("upload_preset", "jkwvfmid");
      formData.append("timestamp", Date.now() / 1000);
      formData.append("api_key", 836542252532563);
    });

    dropzone.on("success", (_, response) => {
      const { public_id: publicId, secure_url: url } = response;
      const modifiedImages = Array(9)
        .fill(undefined)
        .map(() => getURLByRandomColor(publicId));
      image.set({
        modifiedImages,
        originalImage: url,
        state: ImageState.UPLOADING_COMPLETED,
      });
    });

    dropzone.on("error", (file, response) => {
      console.error("Something went wrong", file, response);
    });
  });
</script>

<div>
  <form
    id="dropzone"
    class="grid h-72 mt-9 w-full border-solid border-2 border-white items-center justify-center"
    action="https://api.cloudinary.com/v1_1/ddv6amwz9/image/upload"
  >
    <h1>Drag and drop files here</h1>
  </form>
</div>
