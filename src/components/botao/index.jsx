import ('./botao.css')

function Botao(props) {

    return ( 
        <button type='submit' onClick={props.fn}>Calcular</button>
     );
}

export default Botao;