import { useState } from "react"

function Form_Handeling() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");

    const [alldata, setalldata] = useState([])

    function buttonhandle(e){
        e.preventDefault()
        const formvalue={ name:name, email:email, subject:subject, message:message}
        setalldata([...alldata,formvalue]);

        setname("");
        setemail("");
        setsubject("");
        setmessage("");
    }
    return (

        <div className="row mt-5 ml-5">
            <div className="col-lg-6 mb-5 mb-lg-0" >
                <div className="contact-form">
                    <div id="success" />
                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                        <div className="form-row">
                            <div className="col-sm-6 control-group">
                                <input type="text" name="name" value={name} onChange={(e)=> setname(e.target.value)} className="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger" />
                            </div>
                            <div className="col-sm-6 control-group">
                                <input type="email" name="email" value={email} onChange={(e)=> setemail(e.target.value)} className="form-control p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <input type="text" name="subject" value={subject} onChange={(e)=> setsubject(e.target.value)} className="form-control p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                            <p className="help-block text-danger" />
                        </div>
                        <div className="control-group">
                            <textarea name="message" value={message} onChange={(e)=> setmessage(e.target.value)} className="form-control p-4" rows={6} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                            <p className="help-block text-danger" />
                        </div>
                        <div>
                            <button onClick={buttonhandle} className="btn btn-primary btn-block py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-6">
                <div className="table">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Eail</th>
                        <th>Subject</th>
                        <th>Message</th>
                    </tr>
                    {
                        alldata.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.message}</td>
                                </tr>
                            )
                        })
                    }
                </div>
            </div>
        </div>


    )
}

export default Form_Handeling