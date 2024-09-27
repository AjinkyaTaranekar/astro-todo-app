<script>
  let query = "";

  function handleSearch() {
    console.log("SearchBar: Search initiated with query:", query);
    window.dispatchEvent(new CustomEvent("todo-search", { detail: query }));
  }

  console.log("SearchBar: Component initialized");
</script>

<form on:submit|preventDefault={handleSearch}>
  <input bind:value={query} placeholder="Search todos..." />
  <button type="submit">Search</button>
</form>
