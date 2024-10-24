import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    names: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    job: {
        type: String,
        required: false
    },
    company: {
        type: String,
        required: false
    },
    department: {
        type: String,
        required: false
    },
    userId: {
        type: String,
        required: true
    }
})

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;