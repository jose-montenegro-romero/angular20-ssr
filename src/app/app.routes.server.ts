import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  // //   { path: 'artista/:id', renderMode: RenderMode.Client },
  // //   { path: ':id', renderMode: RenderMode.Client },
  // //   { path: '**', renderMode: RenderMode.Client },
];
