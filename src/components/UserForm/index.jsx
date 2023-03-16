import "react-tooltip/dist/react-tooltip.css";

export default function UserForm({ data, updadateFieldHandler }) {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="nome">Nome Completo de Nascimento (com acentos se houver)</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Exemplo: Ana Paula da Silva"
          required
          value={data.nome || ""}
          onChange={(e) => updadateFieldHandler("nome", e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email da compra. Ex: seuemail@email.com"
          required
          value={data.email}
          onChange={(e) => updadateFieldHandler("email", e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="data_nascimento">Data de Nascimento</label>
        <input
          type="date"
          name="data_nascimento"
          id="data_nascimento"
          required
          value={data.data_nascimento}
          onChange={(e) => updadateFieldHandler("data_nascimento", e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="telefone">Celular</label>
        <input
          type="celular"
          name="telefone"
          id="telefone"
          placeholder="Exemplo: 11999998888"
          required
          value={data.telefone}
          onChange={(e) => updadateFieldHandler("telefone", e.target.value)}
        />
      </div>
    </div>
  );
}
