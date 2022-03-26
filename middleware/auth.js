export default function (context) {
    console.log('Hello = ', context.store.getters.isAuthenticated);
    if (!context.store.getters.isAuthenticated) {
        setTimeout(() => {
            context.redirect('/')
            alert('Please login first');
        }, 1500)
    }
}