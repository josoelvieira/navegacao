import './Content.css';
import {Switch, Route, Routes} from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import Notfound from '../../views/examples/notFound';

const content= (props) => (
    <main className='Content'>
        <Routes>
           

            <Route path="/" element={<Home/>} />

            <Route path="/param/:id" element={<Param/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Notfound/>}/>


        </Routes>

    </main>
    
);
export default content;

