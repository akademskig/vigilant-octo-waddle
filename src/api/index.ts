
// for error testing, mocks existing db records
const existingData = [
    {
        code: 'username',
        dataType: 'string',
        valueStr: 'Marta Susek'
    }
]

export function registerUser(form: any) {
    const body = parseData(form)
    let uniqueField = body.fields.find((d: any) => d.code === "username")
    let existing = existingData.find(ed => ed.code === uniqueField.code && ed.valueStr === uniqueField.valueStr)
    let error: any = null
    if (existing) {
        const fieldName = form.find((field: any) => field.code === existing?.code).name
        error = `${fieldName} ${existing?.valueStr} already exists!`
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject({
                    info: {
                        success: false,
                        message: "Request failed!",
                        error: error
                    }
                })
            } else {
                resolve({
                    info: {
                        success: true,
                        message: "Request successull!"
                    }
                })
            }
        }, 3000)
    })
}

function parseData(form: any) {
    const formData = form.map(({ code, value, dataType }: { code: string, value: string, dataType: string }) => ({
        code: code,
        valueStr: value,
        dataType: dataType
    }))
    return { fields: formData }

}