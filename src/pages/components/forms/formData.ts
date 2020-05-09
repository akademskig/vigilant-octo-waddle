export const form = [
    {
        code: 'fname',
        name: 'First name',
        dataType: 'string',
        validations: {
            required: {
                value: true,
                message: 'First name is required'
            },
            minLength:{
                value: 2,
                message: 'First name should have at least 2 characters!'
            },
            maxLength: {
                value: 25,
                message: 'First name should not exceed 25 characters!'
            },
            pattern: {
                value: /^[a-zA-ZÀ-ž ]*$/,
                message: 'First name can contain only letters!'
            }
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
            minLength:{
                value: 2,
                message: 'Last name should have at least 2 characters!'
            },
            maxLength: {
                value: 25,
                message: 'Last name should not exceed 25 characters!'
            },
            pattern: {
                value: /^[a-zA-ZÀ-ž ]*$/,
                message: 'Last name can contain only letters!'
            }
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
            minLength:{
                value: 4,
                message: 'Username should have at least 4 characters!'
            },
            maxLength: {
                value: 20,
                message: 'Username should not exceed 20 characters!'
            },
            pattern: {
                value: /^[a-zA-ZÀ-ž0-9 ]*$/,
                message: 'Username can contain only letters and numbers!'
            }
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
        name: 'Repeat password',
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
    },
    {
        code: 'accept',
        name: 'I accept the terms and conditions',
        dataType: 'boolean',
        fieldType: 'checkbox',
        validations: {
            required: {
                value: true,
                message: 'Accept the terms and conditions'
            },
        }
    },
]
export const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})")
export const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
