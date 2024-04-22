import { readable } from 'svelte/store';

function media(query: string) {
  if (typeof window === 'undefined' || !query) {
    return readable(null);
  }

  return readable<boolean>(false, (set) => {
    const mql = window.matchMedia(query);
    set(mql.matches);

    const listener = (ev: MediaQueryListEvent) => set(ev.matches);
    mql.addEventListener('change', listener);

    return () => mql.removeEventListener('change', listener);
  });
}

export default media;

export const reduced = () => media('(prefers-reduced-motion)');
export const darkmode = () => media('(prefers-color-scheme: dark)');
