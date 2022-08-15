import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import { faTwitter ,faDiscord , faMedium} from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/home.module.css'

export default function Claim() {
    const[userData,setUserData] = useState({name:"",email:""});

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(userData);
  }

  const handleChange = (e)=>{
    e.preventDefault();
    const {name,value}=e.target;
    setUserData({...userData,[name]:value});
    //console.log(formValues);
  }

  const handleGoogleSignIn = ()=>{
    console.log("google");
  }
  const handleGithubSignIn = ()=>{
    console.log("github");
  }

  return (
    <>
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
        
        <div className={styles.nft}>
            <img src="./nft1.jpg" alt="" srcset="" />
        </div>
                            <div className={styles.formCard} onSubmit={handleSubmit}>
                                <div className={styles.submitButton}>
                                     
                                      <a href="https://gateway.ipfscdn.io/ipfs/QmUfp6thZQTmNKS6tzijJpxdoBe9X7spHwzRjUh3RPTAwF/edition-drop.html?contract=0xD8E4775451E2Ba750cC7C5ec596a04E2d2eeF549&chainId=137&tokenId=0&relayUrl=bdfe2b57-b2d3-4aed-b256-fb89f47ab5b2">claim NFT</a>
                                </div>

                                <div className={styles.panel}>
                                  <div className={styles.heading}>
                                    <h3>visit our socials</h3>
                                  </div>
                                  <div className={styles.icons}>
                                    <FontAwesomeIcon  className={styles.icon}icon={faTwitter} onClick={handleGoogleSignIn} size="lg"/>
                                    <FontAwesomeIcon  className={styles.icon}icon={faDiscord}  onClick={handleGithubSignIn} size="lg"/>
                                    <FontAwesomeIcon  className={styles.icon}icon={faMedium}  onClick={handleGithubSignIn} size="lg"/>
                                  </div>
                                </div>
                            </div>
                        </div>
    </div>
    </div>
    </>
  )
}
