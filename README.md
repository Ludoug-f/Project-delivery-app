# Project Delivery App

## *Sobre o Projeto*
Nessa aplicação, meu grupo foi responsável por criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery de cerveja. 🍻

> O projeto não foi só codar, mas também é trabalhar em equipe, aprender e se divertir muito!
---
## *Obejtivo*

**Acesso via login:** <br>
Tanto `clientes` como pessoas `vendedoras`, assim como `admin`, que administra o sistema, tem acesso ao aplicativo via login, porém para funções diferentes:

   * A pessoa `cliente`, que compra da lista de produtos;
   * A pessoa `vendedora`, que aprova, prepara e entrega;
   * A pessoa `administradora`, que gerencia quem usa o aplicativo;

**Comunicação entre clientes e pessoas vendedoras:** <br>
A pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem o comprou, essa pessoa marca o pedido como "recebido". Ambos possuem detalhes sobre seus pedidos;

Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, pode ver as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

---
## *Iniciando o projeto*

1. Clonar o repositorio

        git clone git@github.com:Ludoug-f/Project-delivery-app.git

2. Entrar na pasta project-delivery-app
  
        cd ./Project-delivery-app
    
3. Instalar pacotes NPM
  
        npm i

### Variáveis de Ambiente

Para que o banco de dados funcione é necessário configurar as variáveis de ambiente.

1. Criar um arquivo `.env` na pasta `back-end` com as seguintes variáveis:

        NODE_ENV=development
        API_PORT=3001
        MYSQL_HOST=localhost
        MYSQL_PORT=3306
        MYSQL_USER=root
        MYSQL_PASSWORD=suaSenha
        MYSQL_DB_NAME=delivery-app
        EVAL_ALWAYS_RESTORE_DEV_DB=true

    > Você pode editar e renomear o arquivo exemplo `.env.example` na pasta back-end.

### Executando
  
1. voltar para pasta raiz do projeto
  
        cd ..
  
    > pasta `trybe-project-delivery-app`

2. iniciar o aplicativo
    
        npm start

   após o start por padrão você será redirecionado para uma página do seu navegador com a seguinte URL:

        http://127.0.0.1:3000/

Se tudo ocorreu bem, agora estará rodando nosso app!

## *Contato*

* Luciano Freitas - [Linkedin](https://www.linkedin.com/in/luciano-f/) - [GitHub](https://github.com/Ludoug-f)
* Marcos Sobrinho - [Linkedin](https://www.linkedin.com/in/marcosvdss) - [GitHub](https://github.com/marcovdss)
* Bruno Pelegrino - [Linkedin](https://www.linkedin.com/in/bruno-pelegrino) - [GitHub](https://github.com/BrunoPelegrino)
* Fernando Gouveia - [Linkedin](https://www.linkedin.com/in/fernando-gouveia-562218a2/) - [GitHub](https://github.com/FernandoGouveia92)
* Matheus Flores - [Linkedin](https://www.linkedin.com/in/matheus-oaf/) - [GitHub](https://github.com/MathssF)

#### *Agradecimentos*

[Trybe](https://www.betrybe.com/)<br>
[Best-README-Template](https://github.com/othneildrew/Best-README-Template)