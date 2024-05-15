import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Contact = () => {
    const [name , setname] = useState('')
    const [number , setnumber] = useState('')
    const [email , setemail] = useState('')
    const [message , setmessage] = useState('')

    const navigate = useNavigate()


    const handleSubmit = async (e) =>{
        e.preventDefault();
        alert(`${name} ${number} ${email} ${message}`);
         
        const obj = {
            name: name,
            contactno: number,
            email: email,
            message: message
        };
        console.log(JSON.stringify(obj));
        console.log(`${name} ${number} ${email} ${message}`)
          
      try {
        const response = await axios.post("https://spices-2jcs.onrender.com/contactus", obj)
        if(response){
        console.log("response is :",JSON.stringify(response))
        navigate("/table")
    }
      } catch (error) {
        console.log("something is wrong ", error)
      }
    }
    

  return (
    <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
            <h1 className="mb-5">Contact For Any Query</h1>
        </div>
        <div className="row g-4">
            <div className="col-12">
                {/* <div className="row gy-4">
                    <div className="col-md-4">
                        <h5 className="section-title ff-secondary fw-normal text-start text-primary">Booking</h5>
                        <p><i className="fa fa-envelope-open text-primary me-2"></i>book@example.com</p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="section-title ff-secondary fw-normal text-start text-primary">General</h5>
                        <p><i className="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="section-title ff-secondary fw-normal text-start text-primary">Technical</h5>
                        <p><i className="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                    </div>
                </div> */}
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.55000943911!2d75.87861337475998!3d22.67056032937381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcbe010ede31%3A0x8cf500da13c868a6!2sKhandwa%20Rd%2C%20Rani%20Bagh%20Main%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1715412277895!5m2!1sen!2sin" width="600" height="450" style={{order:"0"}} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               
            </div>
            <div className="col-md-6">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input value={name} onChange={(text)=>setname(text.target.value)} type="text" className="form-control" id="name" placeholder="Your Name"/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                <input value={number} onChange={(text)=>setnumber(text.target.value)} type="number" className="form-control" id="number" placeholder="number"/>
                                    <label for="number">Number</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                <input value={email} onChange={(text)=>setemail(text.target.value)} type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea value={message} onChange={(text)=>setmessage(text.target.value)} className="form-control" placeholder="Leave a message here" id="message" style={{height:" 150px"}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
