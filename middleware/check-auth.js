export default function (context) {
  if (process.browser) {
    context.store.dispatch("INIT_AUTH", context.req);
  }
} 