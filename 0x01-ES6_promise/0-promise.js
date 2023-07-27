export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const data = 'Something';
    const error = null;

    if (error) {
      reject(error);
    } else {
      resolve(data);
    }
  });
}
