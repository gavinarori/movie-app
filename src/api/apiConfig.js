const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'd4b1cc1aa4b40df8beae248e61735ffb',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
    
}

export default apiConfig;