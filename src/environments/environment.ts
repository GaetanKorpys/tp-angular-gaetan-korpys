export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '3000',
    endpoints: {
      musicAleatoire: '/musics/random',
      toutesLesMusics: '/musics',
      uneMusic: '/musics/:id',
      filterByTitle: '/musics/title/:title'
    }
  }
};
