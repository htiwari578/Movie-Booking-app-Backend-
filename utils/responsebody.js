const errorResponseBody = {
    err: {},
    data: {},
    message: "Something went wrong,unable to fetch movie",
    success: false
}
const successResponseBody = {
    data: {},
    message: "Movie fetched successfully",
    success: true
}
export default { errorResponseBody, successResponseBody };