<script lang="ts">
	/* eslint-disable svelte/no-at-html-tags */

	import { icons } from 'feather-icons';

	let className = '';
	export { className as class };

	export let name: keyof typeof icons = 'star';
	export let size = '100%';
	export let strokeWidth = 2;
	export let strokeLineCap: 'butt' | 'round' | 'square' = 'round';
	export let strokeLineJoin: 'miter' | 'round' | 'bevel' = 'round';

	if (size !== '100%') {
		size = size.slice(-1) === 'x' ? size.slice(0, size.length - 1) + 'em' : parseInt(size) + 'px';
	}
</script>

{@html icons[name].toSvg({
	class: `feather feather-${name} ${className}`,
	width: size,
	height: size,
	'stroke-width': strokeWidth,
	'stroke-linecap': strokeLineCap,
	'stroke-linejoin': strokeLineJoin
})}
