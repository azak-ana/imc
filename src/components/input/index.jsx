

import ('./input.css')

function CampoTexto(props) {

    return ( 
        <>
        <label htmlFor={props.id}>{props.label}</label>
        <input required="true" onChange={props.fn} valueid={props.id} type="number" />
        </>
     );
}

export default CampoTexto;