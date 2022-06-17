import './App.css';
import HomePage from "./pages/homepage/homepage.component.jsx"
import {Routes,Route,Navigate} from 'react-router-dom'
import Shop from "./pages/shop/shop.component.jsx"
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Component } from 'react/cjs/react.production.min';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
const myInlineStyle={
  color:'black',
  fontSize:'40px',
  fontFamily:'Ariel',
  position:'absolute',
  top:'50%',
  left:'40%'
}

const Hatspage =props => {
  console.log(props);
  return ( 
    <div>
      Hatspage
    </div>
  );
}

const Jacketspage =props => {
  console.log(props);
  return (
    <div>
      Jacketspage
    </div>
  );
}

const Sneakerspage =props => {
  console.log(props);
  return (
    <div>
      Sneakerspage
    </div>
  );
}

const Womenspage =props => {
  console.log(props);
  return (
    <div>
      Womenspage
    </div>
  );
}

const Menspage =props => {
  console.log(props);
  return (
    <div>
      Menspage
    </div>
  );
}


class App extends Component {


  unsubscribeFromAuth = null;

  componentDidMount(){

    console.log("hello")
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged( 
      
      async user => {
        if(user)
        {
          console.log(user);
          const userRef = createUserProfileDocument(user);
          (await userRef).onSnapshot(snapShot=>{
           
            setCurrentUser( {
              currentUser:{
                id:snapShot.id,
                ...snapShot.data()
              }
            
            });  
          })
        }
        else
        {
          setCurrentUser({currentUser:user});
        }
        
      }

    );

  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }





 render ()
 {
  return (

    <>
    
    <Header/>
    
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="shop/hats" element={<Hatspage />} />
      <Route path="shop/jackets" element={<Jacketspage />} />
      <Route path="shop/sneakers" element={<Sneakerspage />} />
      <Route path="shop/womens" element={<Womenspage />} />
      <Route path="shop/mens" element={<Menspage />} />
      {/* <Route path="signIn" element={<SignInAndSignUpPage/>} /> */}
      <Route path="signIn" element={(this.props.currentUser ? (<Navigate replace to="/" />) : <SignInAndSignUpPage/>)} />
      <Route path="*" element={<div style={myInlineStyle}>404 Page not found😶</div>} />

    </Routes>
    </>
    
  );
 }
  
}
const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user =>  dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
