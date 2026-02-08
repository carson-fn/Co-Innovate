import emailjs from '@emailjs/browser';

type TemplateParameters = Record<string, string | number | boolean>;

let initialized = false;

// initialize EmailJS with public key
const initEmailJS = (publicKey: string) => {
    if (!initialized) {
        emailjs.init(publicKey);
        initialized = true;
    }
};


// env helper function
const getEnv = (key: string) => process.env[key as keyof NodeJS.ProcessEnv];


// main send email function
const sendEmail = async (templateEnvKey: string, templateParameters: TemplateParameters): Promise<void> => {
    const serviceId = getEnv('REACT_APP_EMAILJS_SERVICE_ID');
    const templateId = getEnv(templateEnvKey);
    const publicKey = getEnv('REACT_APP_EMAILJS_PUBLIC_KEY');

    if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS env vars missing');
    }

    initEmailJS(publicKey);

    try {
        await emailjs.send(serviceId, templateId, templateParameters);
        console.log('Email sent successfully');
    } catch (err) {
        console.error('Error sending email', err);
        throw err;
    }
};


// send emails for specific templates
export const sendQuestionnaireAnswers = (name: string, email: string, answers: string) =>
    sendEmail('REACT_APP_EMAILJS_TEMPLATE_ID_QUESTIONNAIRE_SUBMISSION', {
        name,
        email,
        answers
    });

export const sendContactForm = ({name, email, subject, message}: {name: string, email: string, subject: string, message: string}) =>
    sendEmail('REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT_FORM', {
        name,
        email,
        subject,
        message
    });