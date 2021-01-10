# TMDb - The Movie Database Microfrontend

### [Microfrontend Container - Home](https://tmdb-microfrontend.vercel.app)

### [Microfrontend Host - Details](https://tmdb-microfrontend-details.vercel.app/529203)

### [Microfrontend Host - Collections](https://tmdb-microfrontend-collections.vercel.app)

### [Microfrontend Host - Favorites](https://tmdb-microfrontend-favorites.vercel.app)

# Ambiente Desenvolvimento

### Pré-requisitos para executar do projeto:

#### Configuração da API TMDB
Primeiro, você precisa obter uma conta no [TMDB](https://www.themoviedb.org) e gerar sua [chave da API](https://www.themoviedb.org/faq/api).
#### Configuração dos projetos
Em todos os projetos deve ser criado o arquivo .env com as informações abaixo:
```
# Exemplo dos valores das variáveis
NAME_APPLICATION=favorites
HOST_URL=http://localhost:3003/
HOST_PORT=3003
API_KEY=API KEY TMDB
```

## Executar os projetos na sequência abaixo
##### 01. favorites
##### 02. collections
##### 03. details
##### 04. container

## Repositórios das aplicações Host
- [Host - favorites](https://github.com/marcospss/tmdb-microfrontend-favorites)
- [Host - collections](https://github.com/marcospss/tmdb-microfrontend-collections)
- [Host - details](https://github.com/marcospss/tmdb-microfrontend-details)

## Referências
- [Module Federation](https://module-federation.github.io/)
- [Micro-frontend Architecture: Replacing a Monolith from the Inside Out](https://levelup.gitconnected.com/micro-frontend-architecture-replacing-a-monolith-from-the-inside-out-61f60d2e14c1)
- [Module Federation Playlist](https://www.youtube.com/playlist?list=PLUf8bXuMd2CZ2qUOya6fIVhlL2CUcCQVC)
- [Como os Microfrontends podem ajudar a focar nas necessidades de negócios](https://www.infoq.com/br/articles/microfrontends-business-needs/)
- [Micro Frontends](https://martinfowler.com/articles/micro-frontends.html)
- [5 Steps to Turn a Random React Application Into a Micro Front-End](https://medium.com/better-programming/5-steps-to-turn-a-random-react-application-into-a-micro-frontend-946718c147e7)
- [10 Decision Points for a Micro-Frontend Approach](https://medium.com/better-programming/10-decision-points-for-micro-frontends-approach-4ebb4b59f40)
- [Micro-frontends decisions framework](https://medium.com/@lucamezzalira/micro-frontends-decisions-framework-ebcd22256513)
- [How We Build Micro Frontends](https://blog.bitsrc.io/how-we-build-micro-front-ends-d3eeeac0acfc)

