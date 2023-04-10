// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: ['@/assets/css/main.css'],
    app: {
        head: {
            title: 'App Nuxt',
            meta: [
                { name: 'description', content: 'App Nuxt' },
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
            ]
        }
    }
})
