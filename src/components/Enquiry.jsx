import React, { useState } from 'react';
import toast from 'react-hot-toast'; // 👈 import toast

const EnquiryPage = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enquiry Submitted:", formData);

        // 🔥 Use toast instead of alert
        toast.success("Thank you for your enquiry!", {
            duration: 4000,
            icon: '📩',
        });

        onClose();
    };

    return (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content shadow-lg rounded-4">
                    <div className="modal-header bg-success text-white rounded-top-4">
                        <h5 className="modal-title"><i className="fas fa-paper-plane me-2"></i>Submit Your Enquiry</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="modal-body p-4">
                            <div className="card border-0 shadow-sm p-3">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            name="name"
                                            placeholder="Enter your name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Email</label>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            name="email"
                                            placeholder="you@example.com"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Phone</label>
                                        <input
                                            type="tel"
                                            className="form-control form-control-lg"
                                            name="phone"
                                            placeholder="+91-XXXXXXXXXX"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            name="subject"
                                            placeholder="Subject of your enquiry"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label fw-semibold">Message</label>
                                        <textarea
                                            className="form-control form-control-lg"
                                            name="message"
                                            rows="4"
                                            placeholder="Write your message here..."
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            style={{ resize: 'none' }}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer bg-light p-3 rounded-bottom-4">
                            <button type="button" className="btn btn-outline-danger" onClick={onClose}>
                                <i className="fas fa-times me-1"></i> Cancel
                            </button>
                            <button type="submit" className="btn btn-success">
                                <i className="fas fa-paper-plane me-1"></i> Submit Enquiry
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnquiryPage;
