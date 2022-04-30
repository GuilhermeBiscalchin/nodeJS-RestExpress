* Conceitos *

- Recurso com URI - identificador unico de cada recurso
- Não guarda estado, comunicação stateless, uma das bases do Rest.

* Iniciando com Rotas *

Verificar versão node

    node -v

Verificar versão npm

    npm -v

Criar pasta pelo terminal.

    mkdir

Fazer a criação do projeto node.

Primeira parte do projeto utilizar com o 'require', instalado o express usar o 'import' e 'export'

 - Criando um servidor http.
 - Criando a porta do servidor local, para escutar as requisições.
 - Criar a variavel do servidor, utilizando o metodo nativo do http, com o 'createServer', passando os parâmetros da função com resposta que vai devolver para o servidor. Passando o content-type, de como vai ser devolvido o texto.

- Ligar o servidor com 'listen', passando uma mensagem que vai escutar a porta servidor.

Instalando o NODEMON => para atualizar em tempo real.(colocar o '-D' para ser visualizada apenas em desenvolvimento.)

npm install nodemon -D


Vamos entender e detalhar alguns desses atributos:

name: é onde você define o nome pelo qual seu módulo será chamado;
version: cada vez que uma atualização do módulo é lançada é atribuído um conjunto de 3 números. os módulos trabalham com três níveis de versionamento seguindo um padrão chamado SemVer (Semantic Versioning), ou seja, versionamento semântico, onde 3 números separados por ponto correspondem, respectivamente, aos atributos Major, Minor e Patch. Patch está relacionado a uma alteração que não quebra uma funcionalidade anterior e nem adiciona novas. Geralmente é usado para liberar alguma correção de bug. Minor é quando adicionamos uma nova funcionalidade, sem quebrar funcionalidades anteriores. Major é quando pode ocorrer uma quebra de compatibilidade. Por isso, é importante indicar a versão de forma adequada. Você pode ler mais sobre versionamento semântico aqui;
description: define o que será este módulo. Ideal que seja uma descrição curta e clara sobre o objetivo principal;
main: define o ponto de entrada da aplicação;
scripts: essa sessão tem alguns scripts pré-definidos, mas você também pode definir os seus personalizados. Nesse link é possível ter acesso a algumas informações sobre os mesmos;
keywords: é um array de palavras-chave sobre o projeto;
author: são dados de autoria, pode conter nome, e-mail e site;
license: é a licença escolhida para o projeto;
dependencies: define a lista de pacotes necessários para executar seu projeto num ambiente de produção;
devDependencies: define a lista de pacotes necessários para executar o projeto num ambiente de desenvolvimento e testes.

Atalhos do NPM

Comando	Atalho	Uso
install	i	Instala um novo módulo
list	ls	Lista os módulos instalados
test	t	Executa o script de teste especificado no package.json
--global	-g	Usado como um sinalizador para instalar um pacote globalmente (não só na pasta do projeto
--save	-S	Salva o módulo ao instalar
--save-exact	-E	Salva o módulo ao instalar, porém na versão exata mencionada
--save-dev	-D	Salva o módulo ao instalar, porém como uma dependência de desenvolvimento

Utilizando o npm help, lista os comandos acima.