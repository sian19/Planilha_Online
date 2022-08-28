# Planilha Online
Uma planilha online feito utilizando ReactJS no front end e firebase no back end.
<h3>Imagens do projeto:</h3>
<img src="https://github.com/sian19/Planilha_Online/blob/master/src/assets/projeto1.jpg" />
<img src="https://github.com/sian19/Planilha_Online/blob/master/src/assets/projeto2.jpg" />
<img src="https://github.com/sian19/Planilha_Online/blob/master/src/assets/projeto3.jpg" />

<p>Um projeto de uma planilha online feita em ReactJs e firebase, onde o usuário deve logar através do Facebook ou Google se o mesmo já tiver uma conta nessas duas plataformas. Após o usuário logar no site ele é direcionado para uma página onde se tem um formulário onde ele deve escolher o mês e preencher os dados que ele quer que seja salvo como banco, conta, valor, data de pagamento e data de vencimento. Com isso o usuário salva esses dados e  automaticamente é exibido para ele em tela os dados com o valor somado de cada item se no caso ele colocar mais de uma linha de items. A planilha online funciona como uma espécie de controle de finanças onde o usuário ao logar e preencher os dados ele pode consultar oque foi pago ou oque ainda se vai pagar e o valor total das suas finanças que é exibido no final da tabela, dessa forma ele pode fazer o controle de cada mês de forma separada. O usuário também pode escolher um tema masculino (o site fica com cores em azul) ou feminino (o site fica com as cores em rosa).</p>

<h3>Oque foi usado no desenvolvimento da aplicação:</h3>
<ul>
  <h4>Front End</h4>
  <li>O projeto foi criado utilizando o framework ReactJs.</li>
  <li>Foi utilizado funções e hooks para renderizar e trabalhar os componentes.</li>
  <li>Foi utilizado a biblioteca react-router-dom para trabalhar a paginação e a lógica das rotas privadas.</li>
  <li>Foi utilizado styled components para estilizar alguns componentes para dessa forma o trabalho de alterar algumas cores de forma dinâmica pegando por base estados ficando mais fácil o desenvolvimento.</li>
  <li>Foi utilizado ContextAPI para trabalhar alguns estados de forma global.</li>
  <li>Foi utilizado um estado global para fazer a alteração do tema do site de masculino para feminino ou vice versa.</li>
  
  <h4>Back End</h4>
  <li>Foi utilizado o Firebase para desenvolver os processos internos da aplicação.</li>
  <li>Se criou um arquivo js onde fica os dados da aplicação criada no firebase, então basta importar as funções do firebase para utilizar recursos como autenticação e fazer requisições no banco de dados (CRUD).</li>
  <li>Foi utilizado a biblioteca firebase-auth para fazer com que o usuário tenha a opção de logar com o Facebook ou o Google.</li>
  <li>Foi utilizado a biblioteca firebase-firestorage para guardar os dados criados, ler os dados e exibi-los em tela quando solicitado pelo usuário, editar os dados e apagar algum dado em específico.</li>
</ul>

<h3>Link do projeto:</h3>
<a href="https://planilha-online.vercel.app/">Clique aqui</a>
