<script lang="ts">
  import media from '$lib/stores/media';

  export let query: string;
  export let loader = false;
  export let empty = false;

  $: mq = media(query);
</script>

{#if $mq === null}
  {#if loader}
    <slot name="loading" />
  {:else}
    <div class="visually-hidden"><slot /></div>
  {/if}
{:else if $mq !== null || !empty}
  <slot matches={$mq} />
{/if}
