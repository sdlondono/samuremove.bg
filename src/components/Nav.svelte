<script lang="ts">
  const items = [
    { label: "Home 🏠", route: "/" },
    { label: "Pricing 💸", route: "#" },
    { label: "Contact 💬", route: "#" },
  ];
</script>

<nav>
  <ul
    class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium justify-center items-center"
  >
    {#each items as item}
      <li>
        <a
          href={item.route}
          aria-current="page"
          class="text-gray-400 hover:text-white hover:border-b-white hover:border-b-2"
          >{item.label}</a
        >
      </li>
    {/each}
  </ul>
</nav>
