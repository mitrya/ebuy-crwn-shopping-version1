import { Component } from 'react/cjs/react.production.min';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'

import HomePage from "./pages/homepage/homepage.component.jsx"
import Shop from "./pages/shop/shop.component.jsx"
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import { selectCartItems } from './redux/cart/cart.selectors';
import { rehydrateCart } from './redux/cart/cart.action';
import CollectionPage from './components/collection/collection.component';

const myInlineStyle={
  color:'black',
  fontSize:'40px',
  fontFamily:'Ariel',
  position:'absolute',
  top:'50%',
  left:'40%'
}


class App extends Component {


  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    const {rehydrateCart} = this.props;
    const {cartItems} = this.props;
    var cartItemsCopy=cartItems;

    this.unsubscribeFromAuth=auth.onAuthStateChanged( 
      
      async user => {
        if(user)
        {
          const userRef = createUserProfileDocument(user);
          (await userRef).onSnapshot(snapShot=>{
           
            const settingUser=async() =>
            {
              await setCurrentUser( {
                currentUser:{
                  id:snapShot.id,
                  ...snapShot.data()
                }
              });  
  
            }
            settingUser().then(() => rehydrateCart(cartItemsCopy));

          })

        }
        else
        {
          const settingUser = async () => 
          {
            await setCurrentUser({currentUser:user});
          }
          
          settingUser().then(() => rehydrateCart(cartItemsCopy));
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
      <Route path="/shop/:collection" element={<CollectionPage />} />
      <Route path='/checkout' element={<CheckoutPage/>} />
         
      <Route path="signIn" element={(this.props.currentUser ? (<Navigate replace to="/" />) : <SignInAndSignUpPage/>)} />
      <Route path="*" element={<div style={myInlineStyle}>404 Page not found😶</div>} />

    </Routes>
    </>
    
  );
 }
  
}
const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  cartItems: selectCartItems

})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user =>  dispatch(setCurrentUser(user)),
  rehydrateCart: cartItems =>  dispatch(rehydrateCart(cartItems))

})
export default connect(mapStateToProps,mapDispatchToProps)(App);
