
const baseUrl = "http://localhost:9090";
const transactionUrl = "http://localhost:9090/transaction";

export const environment = {
  production: false,
  baseUrl: baseUrl,
  saveCreditUrl: `${transactionUrl}/saveCreditDetails`,
};