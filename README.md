# GREENCORN - HACKATHON

### Antes de começar a desenvolver:

1. Clone o repositório
  * `git clone git@github.com:Gui-Alucard/Hackathon-da-Galaxia.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Nasa---Space-Apps-Challenge-2020`

2. SE NECESSÁRIO: Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

3. Faça alterações separadas por novas branchs criadas a partir da branch `main`, criando uma nova branch para cada demanda
  * Verifique que você está na branch `main`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `main`
    * Exemplo: `git checkout main && git pull`
  * Agora, crie uma branch para a demanda que você vai desenvolver do seu projeto
    * Você deve criar uma branch com uma breve descrição da demanda a ser desenvolvida
    * Exemplo: `git checkout -b main-cria-campo-de-busca`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listadas as novas alterações em vermelho)
  * Adicione o arquivo alterado ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listadas as novas alterações em verde)
  * Faça seus `commit`
      * Exemplo:
        * `git commit -m 'cria componente de busca`
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin main-cria-campo-de-busca`

<!--
6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](LINK vem aqui)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a branch, `main`, e a sua branch **com atenção**
  * Coloque um título para a sua _Pull Request_
    * Exemplo: _"Cria tela de busca"_
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](LINK vem aqui) e confira que o seu _Pull Request_ está criado

7. Assim que aprovado por pelo menos duas pessoas e o _Linter_ estiver adereçado, acesse **SEU** _Pull Request_ e clique no botão _"Merge pull request"_
-->


## REQUISITOS DO PROJETO

### Linter

Para garantir a qualidade do seu código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento nós utilizamos neste projeto o linter `ESLint`. Para rodar o linter localmente no seu projeto, execute o comando abaixo:

```bash
npm run lint
```


#### 1. IMPLEMENTE UM INPUT COMO ENTRADA

**Observações técnicas**

<!--
Falta descrever os links das API's usadas. GeoLocation e NASA
-->
1º - Como sua ferramenta pode aceitar um input como entrada e exibir uma visão do céu a partir desse input?
 
  * Você pode anotar as posições dos satélites na tela do céu com informações básicas de identificação *(por exemplo, "GPS-3")*.

  * Você pode adicionar vetores aos pontos de satélite, indicando sua trajetória.

  * Você pode adicionar detalhes adicionais sobre os satélites.

  * Quando estiver no ponto de vista do satélite, você pode atualizar o ponto de vista conforme o satélite se move.

  * Você pode adicionar um argumento opcional "data" às entradas iniciais;  se usado, o mapa de satélite exibe os satélites que estariam presentes naquele momento.

  * Você pode adicionar avanço rápido e retrocesso para ver os arcos que os satélites traçam no céu ao longo do tempo.

  * Você pode adicionar informações adicionais aos satélites, que seriam acessíveis através da interação com eles na visualização.

  * Você consegue tornar os satélites selecionáveis?  E se selecioná-los mudar a visão do usuário para uma visão do "olho do satélite", mostrando o mundo a partir da localização do satélite?  Isso pode preencher a lacuna entre a sala de estar e a órbita com a capacidade de "pular" no ponto de vista de um satélite para ver sua cidade natal e o planeta do céu.

#### 2. IMPLEMENTE UMA OPÇÃO ALTERNATIVA DE INTERAÇÃO COM O USUÁRIO

2º - Submissões alternativas que não sejam de softwares que se relacionem com os objetivos principais (impulsionar o envolvimento do usuário e tornar os satélites da Terra mais acessíveis ou “exploráveis”) também são aceitáveis.

  * Considere o uso de Realidade Aumentada ou "gamificar" seu projeto.
  
  * Que tal adicionar redes sociais?

  * O julgamento será baseado no cumprimento do desafio, criatividade e interface do usuário.

---
## VALE SABER
---

#### Já existem alguns visualizadores de satelites. Cada um deles tem pontos fortes e fracos.

  * Por exemplo, alguns têm uma ampla gama de opções de visualização, mas poucos satélites totais para visualizar.  Outros têm mais satélites, mas estão presos a uma visão centrada no espaço.

  * Embora nenhum deles capture todos os recursos desejados, eles são ótimas ferramentas por si só e podem ser úteis como exemplos para este projeto.

[OLS](https://2019.spaceappschallenge.org/challenges/living-our-world/set-your-sights-high/teams/ols-ro/project)

[BLIND ELEPHANT](https://2019.spaceappschallenge.org/challenges/living-our-world/set-your-sights-high/teams/blind-men-and-the-elephant/project)