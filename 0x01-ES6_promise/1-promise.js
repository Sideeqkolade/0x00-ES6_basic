export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const data = {
      status: 200,
      body: 'Success',
    };
    const error = new Error('The fake API is not working currently');

    if (!success) {
      reject(error);
    } else {
      resolve(data);
    }
  });
}
