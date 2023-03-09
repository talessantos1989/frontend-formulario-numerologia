import { AiOutlineInfoCircle } from "react-icons/ai";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function UserForm({ data, updadateFieldHandler }) {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome Completo de Nascimento (com acentos se houver)</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Exemplo: Ana Paula da Silva"
          required
          value={data.name || ""}
          onChange={(e) => updadateFieldHandler("name", e.target.value)}
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
        <label htmlFor="date_birth">Data de Nascimento</label>
        <input
          type="date"
          name="date_birth"
          id="date_birth"
          required
          value={data.date_birth}
          onChange={(e) => updadateFieldHandler("date_birth", e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="phone">Celular</label>
        <input
          type="celular"
          name="phone"
          id="phone"
          placeholder="Exemplo: 11999998888"
          required
          value={data.phone}
          onChange={(e) => updadateFieldHandler("phone", e.target.value)}
        />
      </div>

      {/* <div className="form-control">
        <label htmlFor="transaction_code">
          Código da Transação Hotmart
          <span
            id="tooltip"
            className="span-tooltip"
            data-tooltip-content={`O código da sua compra na plataforma de vendas. 
            Ele começa com HP... Abra o e-mail que a hotmart enviou e copie este número e cole aqui`}
          >
            <ReactTooltip anchorId="tooltip" />
            <AiOutlineInfoCircle size={15} />
          </span>
        </label>

        <input
          type="text"
          name="transaction_code"
          id="transaction_code"
          placeholder="Digite o Código da Transação Hotmart"
          required
          value={data.transaction_code}
          onChange={(e) => updadateFieldHandler("transaction_code", e.target.value)}
        />
      </div> */}
    </div>
  );
}
