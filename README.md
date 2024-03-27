## Instalação do Visual Studio 2022

1. Pressione o botão do Windows e digite "Visual Studio Installer".
2. Selecione "Modificar".
3. Marque as opções "ASP.NET e desenvolvimento Web" e "Desenvolvimento em Node.js".
4. Clique em "Modificar".
5. Feche o instalador.

## Clonar o Repositório

1. Abra o Visual Studio 2022.
2. Na seção de Introdução, clique em "Clonar repositório".
3. Cole a URL do projeto: [https://github.com/Miguel084/SmartMenu-API](https://github.com/Miguel084/SmartMenu-API).

## Executar o Banco de Dados SQLite

1. Pressione `Ctrl + '` para abrir o terminal.
2. Digite `cd .\SmartMenu.Server\` e pressione Enter.
3. Execute o comando `dotnet ef database update`.

## Visualizar o Banco de Dados

1. Clique em "Extensões" no topo do Visual Studio e selecione "Gerenciar Extensões".
2. Na barra de pesquisa, digite "SQLite and SQL Server Compact Toolbox" e instale a extensão.
3. Reinicie o Visual Studio e abra o projeto novamente.
4. Clique em `Exibir -> Explorador de Servidores` ou pressione `Ctrl + Alt + S`.
5. Clique no ícone indicado na imagem abaixo:

![Ícone do servidor](https://github.com/Miguel084/SmartMenu-API/assets/134954882/79ab1cbc-ca42-4b2f-85e6-b229f32a992f)

6. Em seguida, clique no ícone de adicionar conexão:

![Ícone de adicionar conexão](https://github.com/Miguel084/SmartMenu-API/assets/134954882/3614d8ea-6312-4578-ba95-c4528de4d3e1)

7. Na janela de conexão, clique em "Browse...".
8. Navegue até a pasta do seu projeto e abra o arquivo `SmartMenu-API\SmartMenu.Server\Data\SQLiteDatabase.db`.
9. Feche a janela de conexão.

## Executar o Projeto

Basta clicar no botão verde de execução (Run) com o protocolo HTTPS selecionado.
