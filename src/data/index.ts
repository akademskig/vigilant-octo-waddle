
export const formFields = [
    {
        "code": "fname",
        "name": "First	name",
        "fieldType": "string",
        "defaultValue": "",
        "required": true,
        "validators":
            [
                {
                    "key": "minLength",
                    "name": "minLength",
                    "invalid_message": "min_length_not_met",
                    "description": "Checks	if	input	value	length	is	greater	than	targetLength.	In	case	it	is	less,	method	will	return	an	error",

                    "parameters": {
                        "targetLength": 2
                    }
                },
                {
                    "key": "maxLength",
                    "name": "maxLength",
                    "invalid_message": "max_length_not_met",
                    "description": "Checks	if	input	value	length	is	less	than	targetLength.	In	case	it	is	greater	than	that,	method	will	return	an	error",

                    "parameters":
                    {
                        "targetLength": 25
                    }
                }
            ]
    },
    {
        "code": "lname",
        "name": "Last	name",
        "fieldType": "string",
        "defaultValue": "",
        "validators": [
            {
                "key": "minLength",
                "name": "minLength",
                "invalid_message": "min_length_not_met",
                "description": "Checks	if	input	value	length	is	greater	than	targetLength.	In	case	it	is	less,	method	will	return	an	error",
                "parameters": {
                    "targetLength": 2
                }
            }, { "key": "maxLength", "name": "maxLength", "invalid_message": "max_length_not_met", "description": "Checks	if	input	value	length	is	less	than	targetLength.	In	case	it	is	greater	than	that,	method	will	return	an	error", "parameters": { "targetLength": 25 } }, {
                "key": "lettersOnlyValidator", "name": "lettersOnlyValidator", "invalid_message": "lettersOnlyValidator_failed", "description": "", "parameters": {

                }
            }]
    }, {
        "code": "address",
        "name": "Address",
        "fieldType": "string",
        "dataType": "string",
        "HTML5Hint": "",
        "cssclass": "",
        "order": 4,
        "group": "",
        "defaultValue": "",
        "required": true,
        "Updatable": true,
        "valueList": [

        ],
        "validators": [{
            "key": "maxLength", "name": "maxLength", "warning": false, "invalid_message": "max_length_not_met",
            "description": "Checks	if	input	value	length	is	less	than	targetLength.	In	case	it	is	greater	than	that,	method	will	return	an	error", "parameters": { "targetLength": 50 }
        }]
    }, {
        "code":
            "username",
        "name": "Username",
        "fieldType": "string",
        "defaultValue": "",
        "validators":
            [
                {
                    "key": "minLength",
                    "name": "minLength",
                    "warning": false,
                    "invalid_message":
                        "min_length_not_met",
                    "description": "Checks	if	input	value	length	is	greater	than	targetLength.	In	case	it	is	less,	method	will	return	an	error", "parameters": { "targetLength": 4 }
                }, { "key": "maxLength", "name": "maxLength", "warning": false, "invalid_message": "max_length_not_met", "description": "Checks	if	input	value	length	is	less	than	targetLength.	In	case	it	is	greater	than	that,	method	will	return	an	error", "parameters": { "targetLength": 20 } },]
    }, {
        "code": "email",
        "name": "E-mail",
        "fieldType": "string",
        "dataType": "string",
        "validators":
            [{
                "key": "emailValidator",
                "name": "emailValidator", "warning": false, "invalid_message": "email_validation_failed", "description": "", "parameters": {

                }
            }]
    }, {
        "code":
            "password",
        "name": "Password",
        "fieldType": "password",
        "dataType": "password",
        "validators": [
            {
                "key": "passwordStrength",
                "name": "passwordStrength",
                "warning": false,
                "invalid_message":
                    "password_strength_failed",
                "description": "",
                "parameters": { "regex": "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$" }
            }]
    },
    {
        "code": "password_confirm",
        "name": "Password	Confirmation",
        "fieldType": "password",
        "dataType": "password",
        "validators":
            [{
                "key": "passwordStrength",
                "name": "passwordStrength",
                "invalid_message": "password_strength_failed",
                "description": "",
                "parameters": { "regex": "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$" }
            }]
    }
]	
export const form = [
    {
        code: 'fname',
        name: 'First name',
        value:'',
        setValue: () => '',
        dataType: 'string',
        validations: {
            required: {
                value: true,
                message: 'First name is required'
            },
        }
    }, {
        code: 'lname',
        name: 'Last name',
        dataType: 'string',
        validations: {
            required: {
                value: true,
                message: 'Last name is required'
            },
        },
    }, {
        code: 'username',
        name: 'Username',
        dataType: 'string',
        validations: {
            required: {
                value: true,
                message: 'Username is required'
            },
        } 
    },
    {
        code: 'email',
        name: 'Email',
        dataType: 'string',
        validations: {
            required: {
                value: true,
                message: 'Email is required'
            },
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email"
            }
        }
    }, {
        code: 'password',
        name: 'Password',
        dataType: 'string',
        fieldType: 'password',
        validations: {
            required: {
                value: true,
                message: 'Password is required'
            },
            minLength: {
                value: 8,
                message: "Password not strong enough!"
            }
        }
    }, {
        code: 'repeat_password',
        name: 'Repeat Password',
        dataType: 'string',
        fieldType: 'password',
        validations: {
            required: {
                value: true,
                message: 'You have to confirm password'
            },
            validate: {
                confirm: (value: string) => !!value || "Passwords do not match!"
            }
        }
    }
]
export const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
export const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
