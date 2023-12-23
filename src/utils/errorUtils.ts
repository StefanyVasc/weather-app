export const logError = (error: Error, context: string) => {
  console.error(`Error in ${context}: ${error.message}`);
};