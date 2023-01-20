import ('./img.css')

function Img(props) {
    // const url = props.fn()
    // console.log(url);
    return (
        <img src={props.url} alt="" />
     );
}

export default Img;