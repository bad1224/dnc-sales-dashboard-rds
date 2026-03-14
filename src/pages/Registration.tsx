import styled from 'styled-components'
import{BannerImage} from '@components'                                                     
const LoginArea = styled.div `
    background: #333;

` 

const LoginImage = styled.div `
   background-image: url(/login-imagem.svg);
   background-size: cover;
   height: 100vh;
   width: 50vw;
` 
function Registration () {
 return (
   <>
    <LoginArea>Registration</LoginArea>
    <LoginImage />
   </>
 )
}

export default Registration