'use strict'
const fetchJson = require('util.js').fetchJSON

class News{

    constructor(key){
        this.breakingUrl = `https://newsapi.org/v2/top-headlines?apiKey=${key}`
    }

    fetchBreaking(){
        fetch(breakingUrl)


    }

}