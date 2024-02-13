export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_j1CAiuls.mjs').then(n => n.s);

export { page };
