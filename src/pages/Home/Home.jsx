import styles from "../Home/Home.module.css";

const Home = () => {
  return (
    <div className={`container ${styles.home}`}>
      <h2 className="mt-5">Sobre o Produto Master</h2>
      <p className="lead">
        Bem-vindo ao nosso sistema de gerenciamento de produtos! Aqui, você pode
        adicionar, editar e remover produtos de maneira simples e eficiente.
        Utilize o botão “Produtos” no menu para acessar a área onde é possível
        inserir novos itens, atualizar informações ou excluir produtos
        existentes.
      </p>
      <h3 className="mt-4">Funcionalidades</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Adicionar Produtos:</strong> Preencha o nome e o valor do
          produto e clique em “Salvar” para adicionar um novo item à sua lista.
        </li>
        <li className="list-group-item">
          <strong>Editar Produtos:</strong> Clique no ícone de edição ao lado do
          produto que deseja modificar, atualize as informações e clique em
          “Atualizar”.
        </li>
        <li className="list-group-item mb-5">
          <strong>Remover Produtos:</strong> Clique no ícone de exclusão para
          remover um produto da lista.
        </li>
      </ul>
    </div>
  );
};

export default Home;
