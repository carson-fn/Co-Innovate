import emailjs from '@emailjs/browser';

export const sendQuestionnaireAnswers = (name: string, email: string, answers: string) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_QUESTIONNAIRE_SUBMISSION;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS env vars missing");
    }

    const templateParams = {
        "name": name,
        "email": email,
        "question_answers": answers
    };


    emailjs.send(serviceId, templateId, templateParams, { publicKey: publicKey })
        .then((response) => {
            console.log("email sent", response);
        })
        .catch((error) => {
            console.error("Error", error);
        });
}