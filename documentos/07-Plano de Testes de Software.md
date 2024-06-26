# Plano de Testes de Software

Abaixo estão listados e descritos os testes funcionais que serão realizados na aplicação.


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
  <td>CT-07: Verificar o cadastro de usuários</td>
  <td>
   <ul>
    <li>RF-02: Os usuários devem ter a capacidade de criar uma conta no site fornecendo um endereço de e-mail válido e uma senha segura.</li>
   </ul>
  </td>
  <td>Checar se os usuários conseguem fazer o cadastro corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Sign up", no Menu superior.</li>
    <li>Preencher o formulário com nome, email e senha e clicar em “Cadastrar”.</li>
   </ol>
   </td>
  <td>Ao clicar em cadastrar, se as informações estiverem dentro dos parâmetros esperados, o usuário será redirecionado a pagina de login.</td>
  <td>David Milan</td>
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
  <td>CT-08: Verificar o login de usuários</td>
  <td>
   <ul>
    <li>RF-03: Os usuários registrados devem poder fazer login no site utilizando suas credenciais de conta (e-mail e senha).</li>
   </ul>
  </td>
  <td>Checar se os usuários conseguem fazer o login utilizando email e senha cadastrados.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Login", no Menu superior.</li>
    <li>Preencher o formulário com email e senha e clicar em “Entrar”.</li>
   </ol>
   </td>
  <td>Ao clicar em Entrar, se o usuário e senha estiverem cadastrados a página será direcionada para a página de usuário, mostrando suas listas salvas.</td>
  <td>David Milan</td>
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
  <td>CT-09: Verificar botão de favoritar</td>
  <td>
   <ul>
    <li>RF-02: Os usuários devem ter a capacidade de criar uma conta no site fornecendo um endereço de e-mail válido e uma senha segura.</li>
    <li>RF-03: Os usuários registrados devem poder fazer login no site utilizando suas credenciais de conta (e-mail e senha).</li>
    <li>RF-09:	Os usuários devem poder criar uma lista do zero ou através de um template.</li>
    <li>RF-04: O site deve mostrar as listas que pertecem ao usuário logado.</li>
    <li>RF-11:	Os usuários devem poder marcar as listas como favoritas.</li>
   </ul>
  </td>
  <td>Checar se botão de favoritos está funcionando corretamente, sendo ele somente o contorno de uma estrela por padrão e quando ele está marcado, fica preenchido.</td>
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
    <li>Clique no ícone de estrela (☆) ao lado do título da lista.</li>
   </ol>
   </td>
  <td>Ao clicar no ícone ele deve ficar preenchido com uma cor sólida, indicando que a lista está favoritada.</td>
  <td>David Milan</td>
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
  <td>CT-10: Verificar gráfico dos itens</td>
  <td>
   <ul>
    <li>RF-12: Os usuários devem poder visualizar em formato de gráficos os itens das listas e suas respectivas quantidades..</li>
   </ul>
  </td>
  <td>Checar se os números apresentados nos gráficos estão corretos, e se atualizam automaticamente a medida que é incluido um novo item</td>
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
    <li>Ir até o campo do gráfico e verificar se os números estão de acordo.</li>
    <li>Acrescentar algum item na lista e verificar se houve alteração no gráfico.</li>
   </ol>
   </td>
  <td>Os números apresentados devem estar condizentes com os itens das listas, e qualquer alteração ou inclusão de item, deve ser atualizado automaticamente no gráfico.</td>
  <td>Adrian Sodré</td>
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
  <td>CT-11: Verificar navegaçao dos links na tela inicial.</td>
  <td>
   <ul>
    <li>RF-01: Os usuários devem poder navegar pelas páginas através de links de navegação da página inicial.</li>
   </ul>
  </td>
  <td>Checar se os links de direcionamento de páginas estão funcionando de forma adequada.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos botões de direcionamento.</li>
   </ol>
   </td>
  <td>Os links devem direcionar para a página correta.</td>
  <td>Adrian Sodré</td>
 </tr>
</table>
