import { RenderMode, ServerRoute } from '@angular/ssr';
export const serverRoutes: ServerRoute[] = [
  {
    path: 'dashboard', renderMode: RenderMode.Prerender
  },
  {
    path: 'calculator', renderMode: RenderMode.Prerender
  },
  {
    path: 'deadline', renderMode: RenderMode.Prerender
  },
  {
    path: '**', renderMode: RenderMode.Prerender 
  }
];
