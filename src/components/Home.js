import React from 'react'
import { About } from './About'
import { Services } from './Services'
import  Product  from './Product'
import { useNavigate } from 'react-router-dom'
import { PhotoUpload } from '../dashboard/PhotoUpload'

export const Home = () => {

    const navigate = useNavigate();

    const navigation = () =>{
        navigate("/about")
    }

  return (
  <>
    <div className="container-xxl py-home bg-dark hero-header mb-5">
    <div className="container my-5 py-home">
        <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
                <h1 className="display-3 text-white animated slideInLeft">Inhale the Essence of India:<br/>Ancient Spices.</h1>
                <p className="text-white animated slideInLeft mb-4 pb-2">Embark on a journey through India's culinary heritage with our ancient spice collection. Experience the rich aromas and flavors that have enchanted palates for centuries. Discover the essence of authentic Indian cuisine like never before.</p>
               <button onClick={navigation} className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Get the Details</button>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                <img className="img-fluid" src="img/plate-with-bowls-with-seasoning.png" alt=""/>
            </div>
        </div>
    </div>
</div>
<About />
<Services />
<PhotoUpload />
</>
  )
}
