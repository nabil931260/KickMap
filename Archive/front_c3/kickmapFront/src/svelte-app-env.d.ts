/// <reference types="svelte" />
/// <reference types="@sveltejs/kit" />

declare module '$app/stores' {
    import {page, session} from '@sveltejs/kit';
    export {page, session};
  }