# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento do uso de template de uma lista</td>
  <td>
   <ul>
    <li>RF-02: Os usuários devem ter a capacidade de criar uma conta no site fornecendo um endereço de e-mail válido e uma senha segura.</li>
    <li>RF-03: Os usuários registrados devem poder fazer login no site utilizando suas credenciais de conta (e-mail e senha).</li>
    <li>RF-04: O site deve mostrar as listas que pertecem ao usuário logado.</li>
    <li>RF-09:	Os usuários devem poder criar uma lista do zero ou através de um template.</li>
   </ul>
  </td>
  <td>Verificar se a criação de uma lista usando um template pronto, está sendo adicionado corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Sign Up" no link da página Home.</li>
    <li>Visualizar a página de cadastro.</li>
    <li>Adicionar seus dados e clicar em "Cadastrar".</li>
    <li>Visualizar a página de login.</li>
    <li>Adicionar seus dados e clicar em "Entrar".</li>
    <li>Visualizar um template e lista, e clicar em "Usar"</li>
   </ol>
   </td>
  <td>Deve criar uma lista usando um template pronto.</td>
  <td>Breno Santos Figueiredo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento de visualização das listas do usuário</td>
  <td>
   <ul>
    <li>RF-02: Os usuários devem ter a capacidade de criar uma conta no site fornecendo um endereço de e-mail válido e uma senha segura.</li>
    <li>RF-03: Os usuários registrados devem poder fazer login no site utilizando suas credenciais de conta (e-mail e senha).</li>
    <li>RF-09:	Os usuários devem poder criar uma lista do zero ou através de um template.</li>
    <li>RF-04: O site deve mostrar as listas que pertecem ao usuário logado.</li>
   </ul>
  </td>
  <td>Verificar se o site está mostrando as listas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Sign Up" no link da página Home.</li>
    <li>Visualizar a página de cadastro.</li>
    <li>Adicionar seus dados e clicar em "Cadastrar".</li>
    <li>Visualizar a página de login.</li>
    <li>Adicionar seus dados e clicar em "Entrar".</li>
    <li>Crie uma nova lista ou use um template.</li>
    <li>Visualizar suas listas.</li>
   </ol>
   </td>
  <td>Deve mostrar todas as listas do usuário logado.</td>
  <td>Breno Santos Figueiredo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o funcionamento de adição e remoção de um item da lista</td>
  <td>
   <ul>
    <li>RF-02: Os usuários devem ter a capacidade de criar uma conta no site fornecendo um endereço de e-mail válido e uma senha segura.</li>
    <li>RF-03: Os usuários registrados devem poder fazer login no site utilizando suas credenciais de conta (e-mail e senha).</li>
    <li>RF-09:	Os usuários devem poder criar uma lista do zero ou através de um template.</li>
    <li>RF-04: O site deve mostrar as listas que pertecem ao usuário logado.</li>
    <li>RF-05: Os usuários devem ser capazes de adicionar itens à lista escolhida.</li>
    <li>RF-06: Os usuários devem poder remover itens previamente adicionados à lista, caso desejem modificar sua seleção.</li>
   </ul>
  </td>
  <td>Verificar se o site está adicionando e removendo itens à lista</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Sign Up" no link da página Home.</li>
    <li>Visualizar a página de cadastro.</li>
    <li>Adicionar seus dados e clicar em "Cadastrar".</li>
    <li>Visualizar a página de login.</li>
    <li>Adicionar seus dados e clicar em "Entrar".</li>
    <li>Crie uma nova lista ou use um template.</li>
    <li>Para adicionar, clique no símbolo de adição ao lado esquerdo da lista</li>
    <li>Escolha o nome e a quantidade</li>
    <li>Clique em salvar</li>
    <li>Para remover, passe o mouse em cima do item</li>
    <li>Clique no símbolo de lixeira ao lado da quantidade.</li>
   </ol>
   </td>
  <td>Deve adicionar e remover um item de uma lista.</td>
  <td>Breno Santos Figueiredo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento de visualização das listas do usuário</td>
  <td>
   <ul>
    <li>RF-02: Os usuários devem ter a capacidade de criar uma conta no site fornecendo um endereço de e-mail válido e uma senha segura.</li>
    <li>RF-03: Os usuários registrados devem poder fazer login no site utilizando suas credenciais de conta (e-mail e senha).</li>
    <li>RF-09:	Os usuários devem poder criar uma lista do zero ou através de um template.</li>
    <li>RF-04: O site deve mostrar as listas que pertecem ao usuário logado.</li>
   </ul>
  </td>
  <td>Verificar se o site está mostrando as listas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Sign Up" no link da página Home.</li>
    <li>Visualizar a página de cadastro.</li>
    <li>Adicionar seus dados e clicar em "Cadastrar".</li>
    <li>Visualizar a página de login.</li>
    <li>Adicionar seus dados e clicar em "Entrar".</li>
    <li>Crie uma nova lista ou use um template.</li>
    <li>Visualizar suas listas.</li>
   </ol>
   </td>
  <td>Deve mostrar todas as listas do usuário logado.</td>
  <td>Breno Santos Figueiredo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o funcionamento de deletar uma lista</td>
  <td>
   <ul>
    <li>RF-02: Os usuários devem ter a capacidade de criar uma conta no site fornecendo um endereço de e-mail válido e uma senha segura.</li>
    <li>RF-03: Os usuários registrados devem poder fazer login no site utilizando suas credenciais de conta (e-mail e senha).</li>
    <li>RF-09:	Os usuários devem poder criar uma lista do zero ou através de um template.</li>
    <li>RF-04: O site deve mostrar as listas que pertecem ao usuário logado.</li>
    <li>RF-08: Os usuários devem poder deletar uma lista.</li>
   </ul>
  </td>
  <td>Verificar se o site está deletando a lista selecionada</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Sign Up" no link da página Home.</li>
    <li>Visualizar a página de cadastro.</li>
    <li>Adicionar seus dados e clicar em "Cadastrar".</li>
    <li>Visualizar a página de login.</li>
    <li>Adicionar seus dados e clicar em "Entrar".</li>
    <li>Crie uma nova lista ou use um template.</li>
    <li>Clique no símbolo de lixeira ao lado inferior direito da lista</li>
   </ol>
   </td>
  <td>Deve deletar a lista selecionada.</td>
  <td>Breno Santos Figueiredo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar o funcionamento de aumentar e diminuir a quantidade de um item da lista</td>
  <td>
   <ul>
    <li>RF-02: Os usuários devem ter a capacidade de criar uma conta no site fornecendo um endereço de e-mail válido e uma senha segura.</li>
    <li>RF-03: Os usuários registrados devem poder fazer login no site utilizando suas credenciais de conta (e-mail e senha).</li>
    <li>RF-09:	Os usuários devem poder criar uma lista do zero ou através de um template.</li>
    <li>RF-04: O site deve mostrar as listas que pertecem ao usuário logado.</li>
    <li>RF-10: Os usuários devem poder aumentar e diminuir a quantidade do item à lista.</li>
   </ul>
  </td>
  <td>Verificar se o site está aumentando e diminuindo a quantidade de um item da lista</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Sign Up" no link da página Home.</li>
    <li>Visualizar a página de cadastro.</li>
    <li>Adicionar seus dados e clicar em "Cadastrar".</li>
    <li>Visualizar a página de login.</li>
    <li>Adicionar seus dados e clicar em "Entrar".</li>
    <li>Crie uma nova lista ou use um template.</li>
    <li>Para aumentar, passe o mouse em cima do item e clique no símbolo de adição em quantidade</li>
    <li>Para diminuir, passe o mouse em cima do item e clique no símbolo de subtração em quantidade</li>
   </ol>
   </td>
  <td>Deve aumentar e diminuir a quantidade do item de uma lista.</td>
  <td>Breno Santos Figueiredo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-06: Verificar o funcionamento de marcar um item da lista como concluído</td>
  <td>
   <ul>
    <li>RF-02: Os usuários devem ter a capacidade de criar uma conta no site fornecendo um endereço de e-mail válido e uma senha segura.</li>
    <li>RF-03: Os usuários registrados devem poder fazer login no site utilizando suas credenciais de conta (e-mail e senha).</li>
    <li>RF-09:	Os usuários devem poder criar uma lista do zero ou através de um template.</li>
    <li>RF-04: O site deve mostrar as listas que pertecem ao usuário logado.</li>
    <li>RF-07: Os usuários devem poder marcar um item como concluído à lista.</li>
   </ul>
  </td>
  <td>Verificar se o site está marcando um item da lista como concluído</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Sign Up" no link da página Home.</li>
    <li>Visualizar a página de cadastro.</li>
    <li>Adicionar seus dados e clicar em "Cadastrar".</li>
    <li>Visualizar a página de login.</li>
    <li>Adicionar seus dados e clicar em "Entrar".</li>
    <li>Crie uma nova lista ou use um template.</li>
    <li>Clique no ícone de "X"</li>
   </ol>
   </td>
  <td>Deve marcar um item da lista como concluído.</td>
  <td>Breno Santos Figueiredo</td>
 </tr>
</table>

|Caso de Teste    | CT-X - Título Caso de Teste |
|:---|:---|
| Requisitos Associados | RF-X |
| Objetivo do Teste | Descrição do objetivo do teste |
| Passos | Indicar passos para a execução do teste |
| Critérios de êxito | Indicar os critérios de êxito  |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
