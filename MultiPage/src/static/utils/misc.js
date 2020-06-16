export default {
    setItem (pageName, cb) {
        localStorage.setItem('page', pageName)
        cb.call(this)
    }
}