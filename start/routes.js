'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { Status: 'Hello I am Test deploy Adonis' }
})
