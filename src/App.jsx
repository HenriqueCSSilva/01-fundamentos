import { Header } from "./components/Header";
import {Post} from "./Post";

import './global.css'


function App() {
  return (   
    <div>
      <Header/>

      
      <Post
        author='marcos Henrique'
        content = 'Tes tes tes--------------------------e'
      />
      <Post
          author='marcos Henrique'
          content = 'Tes tes ---------------------------------'
      />
    </div>
  )
}

export default App
