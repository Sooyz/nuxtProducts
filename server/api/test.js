export default defineEventHandler(async (event) => {

    // // handle query params
    // const { name } = getQuery(event)

    // // handle post data
    // const { age } = await readBody(event)

    // Api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=fbYOoVdMoGyPn403Rr9K6Uo0BglkyjvBAciUQp1g&currencies=EUR%2CUSD%2CCAD')

    return data
})