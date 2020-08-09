const api = {
  backend: { 
    root: 'http://api.lomography.com/v1/',
    headers: {
      'Content-Type': 'application/json',
    },
    response: {
      unauthorized: 401,
      refresh: 401,
      forbidden: 403,
    }
  },

}
  
export default api;