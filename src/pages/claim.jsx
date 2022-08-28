import {useState,useContext,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter ,faDiscord , faMedium} from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/home.module.css'
import userContext from '../context/userContext';
import {useNavigate} from 'react-router-dom';

export default function Claim() {
    const navigate= useNavigate();
    const[userData,setUserData] = useState({name:"",email:""});
    const {login} = useContext(userContext);

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(userData);
  }
  useEffect(()=>{
    if(!login)
      navigate('/');

  },[]);

  return (
  
    <div>
    
    <div className={styles.main}>  
      </div>
      <div className={styles.banner}>
        <img src='./banner1.jpg' />
      </div>
      <div className={styles.form}>
        <div className={styles.logo}><img src='./logo.png' alt="" srcset="" /></div>
        
        <div className={styles.container}>
        
        <div className={styles.formWrapper}>
          <div className={styles.heading1}> <h1>Congratulations you have entered Ratofy!!</h1></div>
          
                              <div className={styles.formCard} onSubmit={handleSubmit}>
                                  
                                  
                                    <iframe
                                        src={"https://gateway.ipfscdn.io/ipfs/Qma5FgmS9s3hkQrURfG4XDnh5Dxp9Fx9ZjBYkPFUNdQwfi/edition-drop.html?contract=0xD8E4775451E2Ba750cC7C5ec596a04E2d2eeF549&chainId=137&tokenId=0&relayUrl=https%3A%2F%2Fapi.defender.openzeppelin.com%2Fautotasks%2F9c183054-706f-4f67-baf7-b9100b7c8dad%2Fruns%2Fwebhook%2Ff1498096-a68b-451c-87a0-c06af19a6be9%2F9v3ihuCMCVm3hCaPSVu8NJ"}
                                        frameBorder={"0"}
                                        className={styles.nftCard}

                                    ></iframe>
                                  
                              </div>
                          </div>
      </div>
    </div>
    </div>
    
  )
}
