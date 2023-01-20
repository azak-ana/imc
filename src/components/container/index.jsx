import ('./container.css')

function Container(props) {
    return (
        <div className='caixa'>
             {props.children}
        </div>
      );
}

export default Container;