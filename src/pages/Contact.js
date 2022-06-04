import { Navbar, Footer } from "./components/index";

const Contact = () => {

    return (
        <div className="contact">
            <Navbar selected={'Contact'}/>
            <div className="content container text-dark text-poppins px-5 py-3">
                <h1 className="text-quicksand text-center mb-4">Get in Touch</h1>
                <form className="w-50 mx-auto" name="contact" method="POST" data-netlify="true" onSubmit="submit">
                <div class="mb-3">
                    <label for="name" class="col-form-label fw-bold">Name:</label>
                    <input name="Name" type="text" class="form-control" id="name" />
                </div>
                <div class="mb-3">
                    <label for="email" class="col-form-label fw-bold">Email:</label>
                    <input name="Email" type="text" class="form-control" id="email" />
                </div>
                <div class="mb-3">
                    <label for="subject" class="col-form-label fw-bold">Subject:</label>
                    <input name="Subject" type="text" class="form-control" id="subject" />
                </div>
                <div class="mb-5">
                    <label  for="message" class="col-form-label fw-bold">Message:</label>
                    <textarea name="Message" type="text" class="form-control" id="message"></textarea>
                </div>
                <div className="button-container d-flex justify-content-center">
                    <button id="submit-btn" type="submit" class="btn btn-lg bg-purple text-quicksand px-3 py-2 text-light pointer-events-cursor shadow">Submit</button>
                </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;