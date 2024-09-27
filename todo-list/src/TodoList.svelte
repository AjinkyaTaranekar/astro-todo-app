<script>
  import { onMount } from "svelte";

  let todos = [];
  let newTodo = "";
  let filteredTodos = [];

  function addTodo() {
    if (newTodo.trim()) {
      todos = [...todos, { text: newTodo, completed: false }];
      newTodo = "";
      filterTodos("");
      console.log("TodoList: New todo added:", newTodo);
    }
  }

  function filterTodos(query) {
    filteredTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(query.toLowerCase())
    );
    console.log("TodoList: Todos filtered with query:", query);
  }

  onMount(() => {
    filterTodos("");
    window.addEventListener("todo-search", (event) => {
      console.log("TodoList: Received search event with query:", event.detail);
      filterTodos(event.detail);
    });
    console.log("TodoList: Component mounted");
  });
</script>

<div>
  <h2>Todo List</h2>
  <form on:submit|preventDefault={addTodo}>
    <input bind:value={newTodo} placeholder="Add a new todo..." />
    <button type="submit">Add</button>
  </form>
  <ul>
    {#each filteredTodos as todo}
      <li>
        <input type="checkbox" bind:checked={todo.completed} />
        <span style="text-decoration: {todo.completed ? 'line-through' : ''};">
          {todo.text}
        </span>
      </li>
    {/each}
  </ul>
</div>
