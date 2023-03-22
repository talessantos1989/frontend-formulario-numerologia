import './reviewForm.css'


export default function ReviewForm({data, statusMessage}){

    console.log(newDate(data.data_nascimento).toLocaleDateString());
    const datedmy  = new Date(data.data_nascimento).toLocaleDateString();
    return(
        <>
            <div className="review-container">
                <h2>ATENÇÃO: Revise seus dados</h2>
                <p>Se suas informações estiverem corretas, clique no botão <strong>Enviar</strong></p>
                <p className="review-data">
                    <span>Nome: </span>
                    {data.nome}
                </p>

                <p className="review-data">
                    <span>E-mail: </span>
                    {data.email}
                </p>

                <p className="review-data">
                    <span>Data de Nascimento: </span>
                    {datedmy}
                </p>

                <p className="review-data">
                    <span>Celular: </span>
                    {data.telefone}
                </p>
                {/* <p className="review-data">
                    <span>Código da Transação Hotmart: </span>
                    {data.transaction_code}
                </p> */}
                
            </div>
            <div className='review-error'>
                <span>{statusMessage}</span>
            </div>
        </>
    )
}