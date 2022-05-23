export const formValidationHelper = (inputs: String[]): boolean => {
    let error: boolean = true
    for (let input of inputs) {
        if (input.length) error = false
    }
    return error
}