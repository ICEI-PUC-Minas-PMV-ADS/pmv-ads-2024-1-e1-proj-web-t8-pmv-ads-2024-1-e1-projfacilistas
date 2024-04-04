# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Indivíduo Doméstico</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Homens e mulheres responsáveis por gerenciar as compras para suas casas e famílias.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1- Acesso fácil e intuitivo à plataforma para criar e gerenciar lista de compras.
    2- Funcionalidades que permitam organizar os itens de acordo com categorias e necessidades específicas da família.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02: Profissional Ocupado</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas com agendas agitadas que desejam otimizar seu tempo ao criar e gerenciar lista de compras.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1- Interface intuitiva e rápida para criar lista de compras de forma eficiente.
    2- Recursos de organização que facilitem a gestão de compras recorrentes ou itens essenciais.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `QUEM`    | QUERO/PRECISO ... `O QUE`               |PARA ... `PORQUE`         |
|---------------------|-----------------------------------------|--------------------------|
| Indivíduo doméstico | Organizar minhas listas de compra       | Otimizar o tempo gasto no supermercado |
| Indivíduo doméstico | Centralizar minhas listas em um só lugar| Saber que sempre vou encontrar uma lista que estiver procurando, neste local |
| Indivíduo doméstico | Criar lista de compras organizadas      | Planejar as compras que serão feitas e controlar gastos desnecessários |
| Profissional Ocupado| Otimizar tempo em compras               | Utilizar este tempo em outras atividades |
| Profissional Ocupado| Listas separadas por grupos de itens (limpeza, laticínios, guloseimas...) | Facilitar a ida ao supermercado e evitar desperdício de tempo procurando itens várias vezes. |
## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

| ID    | Descrição                       | Prioridade |
|-------|---------------------------------|------------|
| RF-01 | Os usuários devem poder ordenar os itens da lista de acordo com diferentes critérios, como data de criação, prioridade ou status. | Alta | 
| RF-02 | Os usuários devem ter a capacidade de criar uma conta no site fornecendo um endereço de e-mail válido e uma senha segura. | Média |
| RF-03 | Os usuários registrados devem poder fazer login no site utilizando suas credenciais de conta (e-mail e senha). | Média |
| RF-04 | O site deve mostrar cartões na página inicial, cada um representando uma lista diferente que os usuários podem acessar. | Alta   |
| RF-05 | Os usuários devem ser capazes de adicionar itens à lista escolhida, seja selecionando-os de uma lista predefinida ou inserindo-os manualmente. | Alta |
| RF-06 | Os usuários devem poder remover itens previamente adicionados à lista, caso desejem modificar sua seleção. | Alta |
| RF-07 | Os usuários devem poder marcar um item como concluído à lista. | Alta |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|-----------|
| RNF-01 | O site deve se adaptar automaticamente a diferentes tamanhos de tela e dispositivos. | Alta |
| RNF-02 | O site deve ser compatível com os principais navegadores da web, como Chrome, Firefox, Safari e Edge. | Média |
| RNF-03 | O site deve seguir as diretrizes de acessibilidade da Web Content Accessibility Guidelines (WCAG) para garantir que seja utilizável por pessoas com deficiência. | Média |
| RNF-04 | O site deve contar com tempos de resposta curtos para ações simples. | Alta |
| RNF-05 | A aplicação deve ser otimizada para SEO (Search Engine Optimization), visando uma melhor classificação nos resultados de busca. | Baixa |

**Prioridade: Alta / Média / Baixa. 

