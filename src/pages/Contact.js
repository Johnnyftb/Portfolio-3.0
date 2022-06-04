import { Navbar, Footer } from "./components/index";

const Contact = ({windowWidth}) => {
    return (
        <div className="contact">
            <Navbar selected={'Contact'} windowWidth={windowWidth}/>
            <div className="content container text-dark text-poppins px-5 py-3 mb-5 mb-lg-0 h-100">
                <h1 className="text-quicksand text-center mb-4">Get in Touch</h1>
                <form className={windowWidth > 992 && 'w-50 mx-auto'} name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="mb-3">
                    <label htmlFor="name" className="col-form-label fw-bold">Name:</label>
                    <input name="Name" type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="col-form-label fw-bold">Email:</label>
                    <input name="Email" type="text" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="col-form-label fw-bold">Subject:</label>
                    <input name="Subject" type="text" className="form-control" id="subject" />
                </div>
                <div className="mb-5">
                    <label  htmlFor="message" className="col-form-label fw-bold">Message:</label>
                    <textarea name="Message" type="text" className="form-control" id="message"></textarea>
                </div>
                <div className="button-container d-flex justify-content-center">
                    <button id="submit-btn" type="submit" className="btn btn-lg bg-purple text-quicksand px-3 py-2 text-light pointer-events-cursor shadow">Submit</button>
                </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;