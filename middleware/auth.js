export default function (context) {
    console.log('Hello = ', context.store.getters.isAuthenticated);
    if (!context.store.getters.isAuthenticated && process.client) {
        setTimeout(() => {
            context.redirect('/')
            window.alert('Please login first')
        }, 1500)
    }
}