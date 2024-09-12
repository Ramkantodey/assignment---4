function sendNotification(email) {
    const isEmail = email.indexOf('@');
    if(isEmail === -1){
        return 'Invalid Email';
    }
    const emailParts = email.split('@');
    return emailParts[0] + ' sent you an email from ' +  emailParts[1];
}