if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then((reg) => {
            console.log('Service Worker Registrado.', reg)
        }).catch((err) => {
            console.log('Erro ao registrar serviceWorker!!.', err)
        })
    })
}
