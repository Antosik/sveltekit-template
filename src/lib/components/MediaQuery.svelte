<script lang="ts">
	import media from '$lib/stores/media';

	export let query: string;

	$: mq = media(query);
</script>

<slot matches={$mq} />
