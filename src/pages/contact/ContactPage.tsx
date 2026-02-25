import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'
import { sendContactForm } from '../email/EmailManager'

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';

function ContactPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle')
    const buttonTextMap: Record<SubmissionStatus, string> = {
        idle: 'Send Message',
        sending: 'Sending...',
        success: 'Message Sent!',
        error: 'Error Sending',
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        setSubmissionStatus('sending')
        sendContactForm(formData)
            .then(() => setSubmissionStatus('success'))
            .catch(() => setSubmissionStatus('error'))
            .finally(() => setTimeout(() => setSubmissionStatus('idle'), 3000)) // reset status after 3 seconds
        
        // reset form
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Send us a message!</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">
                    {buttonTextMap[submissionStatus]}
                </button>

                <button type="button" className="submit-btn" onClick={() => navigate("/")}>Back</button>
            </form>

            
        </div>
    )
}

export default ContactPage