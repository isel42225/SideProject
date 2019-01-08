'use strict'

module.exports = () => {
    fetchJSON
}

async function fetchJSON(url) {
    const options = {method: 'GET', credentials: 'same-origin'}
    const resp = await fetch(url, options)
    const body = await resp.json()
    if(resp.status != 200) throw body
    else return body
}