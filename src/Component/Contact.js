const Contact = () => {
    return (
        <div className="contact">
            <p>Fill in the form and submit it so that we get your message</p>
            <form>
                <label>Name</label>
                <input type='text' placeholder='Names' required/>
                <label>Email</label>
                <input type='email' placeholder='example@example.com' required/>
                <label>Message</label>
                <textarea placeholder='Write your message here' required></textarea>
                <button>Send message</button>
            </form>
        </div>
     );
}
export {Contact}
export default Contact;