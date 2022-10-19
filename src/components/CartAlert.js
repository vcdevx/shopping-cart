import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const CartAlert = () => {
  const notify = ()=>{
 
    // Calling toast method by passing string
    toast('Hello Geeks')
}
return (
    <div className="GeeksforGeeks">
        <button onClick={notify}>Click Me!</button>
        </div>
);
  }

export default CartAlert;