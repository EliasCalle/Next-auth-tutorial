import {signIn,useSession } from 'next-auth/react'
import { useRouter } from 'next/router'


function LoginPage(){
    const{
        data:session,status
    }=useSession(
    )
    if (status !=='loading'&&status==='authenticated'){Router.push('/')}
return(
    <div>
        <button onClick={()=> signIn()}>Signin with Github</button>
    </div>
)
}

export default LoginPage