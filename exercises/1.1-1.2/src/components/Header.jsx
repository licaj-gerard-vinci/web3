import img from './LOGO HE VINCI.png'

const Header = (props) => {
    return ( 
      <div>
        <h1>{props.name}</h1>
        <img src={img}/>
      </div>
    )
  }

export default Header