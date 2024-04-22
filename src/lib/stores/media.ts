import { readable } from 'svelte/store';

function media(query: string) {
  return readable<boolean | null>(null, (set) => {
    if (typeof window === 'undefined') {
      set(null);
      return;
    }

    const listener = (ev: MediaQueryListEvent) => set(ev.matches);

    const mql = window.matchMedia(query);
    set(mql.matches);
    mql.addEventListener('change', listener);

    return () => mql.removeEventListener('change', listener);
  });
}

export default media;

export const reduced = () => media('(prefers-reduced-motion)');
export const darkmode = () => media('(prefers-color-scheme: dark)');
