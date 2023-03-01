<script lang="ts">
  export let icon: string;
  export let width: number | undefined = undefined;
  export let height: number | undefined = undefined;
  export let alt: string | undefined = undefined;
</script>

<figure
  title={alt}
  role="img"
  class="svg-icon"
  style:width="{width}px"
  style:height="{height}px"
>
  {@html icon}
</figure>

<style lang="scss">
  figure {
    @include flex_center;
  }

  :global(.svg-icon svg) {
    width: 100%;
    height: 100%;
  }
</style>
