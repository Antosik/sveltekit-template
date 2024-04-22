export function smoothScroll(node: HTMLAnchorElement, opts: { to: string }) {
  function scroll(e: MouseEvent | TouchEvent) {
    e.preventDefault();
    document.getElementById(opts.to)?.scrollIntoView({ behavior: 'smooth' });
  }

  node.addEventListener('click', scroll, false);
  node.addEventListener('touchstart', scroll, false);

  return {
    destroy() {
      node.removeEventListener('click', scroll, false);
      node.removeEventListener('touchstart', scroll, false);
    },
  };
}
