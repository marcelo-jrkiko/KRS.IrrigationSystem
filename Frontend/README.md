# JS Frontend Starter
Projeto Starter para Frontend em VUEJS com TYPESCRIPT e BOOTSTRAP.

Contem:
 - Vue3
 - Typescript
 - Vite
 - BootstrapVueNext
 - Pinia Store
 - Vue Router
 - ESLint 
 - Prettier

# Docker
A imagem Docker contem duas variações de comportamente contraladas pela variavel de ambiente APP_ENV

## APP_ENV=production
Quando essa variável está selecionada como 'production', a imagem irá inicializar o servidor NGINX e distruibuir o site apartir da versão compilada pelo VITE.

## APP_ENV=development
Quando essa variável está selecionada como 'development', a imagem irá inicializar o servidor de desenvolvimento do VITE. Não é recomendado em modo de produção pois pode oferecer lentidão. 
