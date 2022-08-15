import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter ,faDiscord , faMedium} from '@fortawesome/free-brands-svg-icons'
import styles from './styles/home.module.css'

function App() {
  const navigate = useNavigate();
  const[userData,setUserData] = useState({username:"",email:""});
  const[message,setMessage] = useState({username:"",email:""});

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {username,email} = userData;
   try{
            const response= await fetch('http://localhost:5000/api/v1/auth/earlyaccess',{
                method:'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body : JSON.stringify({username,email})
            });
            
            const data = await response.json();
            if(data.status==="fail")
            {
              if(data.message=="email already registered")
              {
                setMessage({...message,email:data.message});
              }

              if(data.message=="username already taken")
              {
                setMessage({...message,username:data.message});
              }
              return;
            }
            
            navigate('/claim');
        }
        catch(error)
        {
            console.log(error);
            return;
        }
    
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
        <h1>Get Early Access to Ratofy</h1>
                            <form className={styles.formCard} onSubmit={handleSubmit}>
                                <div className={styles.inputFields}>
                                    <input required placeholder="create your username" type="name" name="username" value={userData.username} onChange={handleChange}/>
                                    <p>{message.username}</p>
                                </div>
                                <div className={styles.inputFields}>
                                    <input required placeholder="email" type="email" name="email" value={userData.email} onChange={handleChange}/>
                                    <p>{message.email}</p>
                                </div>
                                <div className={styles.submitButton}>
                                    <input type="submit" name="logn" value="join the party!"/>
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
                            </form>
                        </div>
    </div>
    </div>
    </>
    
  );
}

export default App;
