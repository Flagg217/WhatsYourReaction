import React from 'react'
import { useState } from 'react'


const Contact = ()=>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')

    const validateForm = ()=>{
        return name.length > 0 && email.length > 0 && message.length > 0 && subject.length > 0
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        alert('Message Sent')
    }

    return(
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" className="form-control" value={subject} onChange={(e)=>setSubject(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" value={message} onChange={(e)=>setMessage(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!validateForm()}>Submit</button>
            </form>
        </div>
    )
}

export default Contact