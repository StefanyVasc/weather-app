export const logError = (error, context) => {
  // You can customize this function to log errors in different ways (e.g., send to a logging service)
  console.error(`Error in ${context}: ${error.message}`);
};