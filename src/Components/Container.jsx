import Background from './Background';
import Main from './Main';

function Container() {
    return ( <div style={{display:'flex',backgroundColor:'#d9d9d9',flexDirection:'column',width:'100vw'}}>
        <Main/>
        <Background/>

    </div> );
}

export default Container;