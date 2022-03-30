export default function (context) {
    if (!context.store.getters.isAuthenticated && process.client) {
        setTimeout(() => {
            context.redirect('/')
            window.alert('Please login first')
        }, 1500)
    }
}