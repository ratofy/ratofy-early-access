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
          
          <div className={styles.nft}>
              <img src="./nft1.jpg" alt="" srcset="" />
          </div>
                              <div className={styles.formCard} onSubmit={handleSubmit}>
                                  <div className={styles.submitButton}> <button onClick={()=>{console.log("Checking Wallet Connection")}}>Connect Wallet</button></div>

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
    </div>
    
  )
}
