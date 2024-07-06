# BootStrap
API Backend em Typescript com Express e Sequelize.

## Componentes
Os seguintes componentes forma a estrutura deste projeto:
 - Express
	 - Estrutura de Rotas e Controllers
 - Sequelize
	 - ORM para Acesso ao Banco de Dados
 - Winston
	 - Responsável por Escrever os Logs de Forma Padronizada
 - Jest
     - Responsável pelos testes unitários
	 
## Estrutura de Código

**Organização**
 - src/Config
	 - Contem todas as funções de inicialização de configurações da aplicação
 - src/controllers
	 - Contem todos os controllers da aplicação
 - src/domian
	 - Contem interfaces e classes de dados
 - src/resources/migrations
	 - Contem as migrations para o banco de dados
 - src/routes
	 - Contem as rotas da API
 - src/resources/seeders
	 - Contem os Seeders para a Base de Dados
 - src/storage
	 - Armazenamento de Assets da Aplicação

**Configuração do Aplicativo**
Todas as configurações são carregadas das variaveis de Ambiente , essas variaveis são carregadas pelo DOTENV do arquivo (.env)
As seguintes classes são responsaveis por carregar e configurar a aplicação:

 - src/config/App.ts
	 - Carrega as Configurações da Aplicação como "Porta do Servidor"
 - src/config/Database.ts
	 - Carrega as Configurações do Banco de Dados para o ORM 
		 - Tambem cria o arquivo CliConfig.json para o sequelize-cli
 - src/config/Logging.ts
	 - Carrega e Configura o Logger Global da Aplicação

**Classes/Funções Globais**
 - GlobalContext.getGlobalConfiguration() 
	 - Retorna a instancia do Objeto que Armazena todas as Configurações da Aplicação
 - GlobalContext.getLogger()
	 - Retorna a Instancia do Logger da Aplicação
	 
## Configurando o Ambiente DEV
**Criar o arquivo .ENV apartir do SAMPLE.ENV**

DB_HOST=*HOST DO BANCO*
DB_USER=*USUARIO DO BANCO*
DB_PASSWORD=*SENHA DO BANCO*
DB_NAME=*NOME DO BANCO*

APP_NAME=*NOME DA APLICACAO*
APP_PORT=*PORTA DA APLICACAO*

FORWARD_APP_PORT=*PORTA PARA REDIRICIONAR DO DOCKER*
DOCKER_REPOSITORY=*REPOSITORIO DO DOCKER*

ADMIN_DEFAULT_PWD=*SENHA PADRAO DO ADMIN*
ADMIN_DEFAULT_EMAIL=*EMAIL PADRAO DO ADMIN*
ADMIN_DEFAULT_PROFILE=*PERFIL PADRAO ADMIN*


**Configurar o ambiente é inicializar o POSTGRES com o Docker:**

    docker-compose up -d

Apos o banco de dados subir, é necessário conectar no banco e criar a base de dados com o mesmo nome que está no .env (DB_NAME).

**Instalar o NPM**

    npm install

**Fechar a aplicação e rodar os migrates**

    npm run db:migrate

	
**Rodar a aplicação pela primeira vez**

	node --loader ts-node/esm src/Server.ts

ou pelo docker

	docker-compose up


## Sobre o Generator do Sequelize
WIP 

## Seeders
As Seeders estão em src/resources/seeders e podem ser executadas pelo comando:

```
npm run db:seed
```

## Comandos

**npm run dev**
Inicializa o Servidor no modo de desenvolvimento

**npm run build**
Realiza a Compilação da Imagem Docker para o Projeto e realizar o PUSH 
A envvar DOCKER_REPOSITORY deve estar configurada

**npm run docker-run**
Executa o comando BUILD e UP para subir os containers do projeto.

**npm run db:migrate**
Executa o Migrate no Banco de Dados

**npm run db:seed**
Realize o Seed do Banco de Dados

**npm run sync:permissions**
Sincroniza as Permissões com o Banco de Dados e Atualiza o Perfil ADMIN padrão 

## Gerar Models/Repository/Controllers  apartir do Banco
Este processo vai gerar toda a estrutura CRUD da API apartir do Banco de Dados para uma tabela, gerando assim:

- O Model
- O Repositorio
- O Controller
- As permissoes básicas
- As rotas 

Algumas regrinhas:

- O nome do model é baseado no nome da Tabela convertido para o singular, então o ideal é que o nome da tabela seja no plural em Ingles 
  - Exemplo: Users vai gerar o Model User 
- Tudo é gerado dentro de um namespace para que seja organizado corretamente.

Para gerar basta executar:

npm run db:generate -- -t Notes -n System

- Parametro -t Indica o nome da tabela
- Parametro -n Indica o namespace utilizado

Mais detalhes
Veja: https://www.npmjs.com/package/sequelize-typescript-generator
O nome no singular é gerado pela lib: https://www.npmjs.com/package/pluralize

## Perfils para Usuários "CLIENT"
As regras padrões para os perfils de Cliente e Cliente somente leitura estão definidas no arquivo:
resources/DefaultProfiles/Client *