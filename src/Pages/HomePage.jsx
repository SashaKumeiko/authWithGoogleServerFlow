import React,{useState} from 'react'
import axios from 'axios'
import PermissionModal from '../components/PermissionModal'


const HomePage = () => {
    const [redirect, setRedirect] = useState('')

 const beginAuth = async ()=> {
    
     // it must be request to backend for the redirect url instead of this fake url
       const redirectUrl = await axios.get('https://swapi.dev/api/planets/3/') 
       setRedirect(redirectUrl)
	}
    // redirect url is fake
    return(<div>
        <PermissionModal beginAuth={beginAuth} redirectUrl={redirect}/>
</div>)
    }

export default HomePage
