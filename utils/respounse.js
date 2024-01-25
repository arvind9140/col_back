export function responseData(res, message, ErrorCode, status, errorMessage ,resData=[],token) {
    return res.status(ErrorCode).json({
      message: message,
      status: status,
      errorMessage: errorMessage,
      code: ErrorCode,
      data: resData,
      token: token,
      
    });
  }