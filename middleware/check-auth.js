export default function (context) {
    console.log("mohammad Younoch");
    if( process.client)
    context.store.dispatch("INIT_AUTH");
  }