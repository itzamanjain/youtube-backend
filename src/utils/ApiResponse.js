class ApiResponse {
  constructor(statusCode, data, message = "success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400; //statuscode sheet given in company but in startups maybe not
  }
}

export { ApiResponse };
