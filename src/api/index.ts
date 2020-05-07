
// for error testing, mocks existing db records
const existingData = [
    {
        code: 'username',
        dataType: 'string',
        valueStr: 'Marta Susek'
    }
]
export function registerUser(data: any) {
    let username = data.fields.find((d: any) => d.code === "username")
    let existing = existingData.find(ed => ed.code === username.code && ed.valueStr === username.valueStr)
    let error = existing
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject({
                    info: {
                        success: false,
                        message: "Request failed!"
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
