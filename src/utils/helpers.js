export const getMultiplesUrlsData = async (urls) => {
  try {
    const promises = urls.map(async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      return await response.json();
    });
    const responseData = await Promise.all(promises);
    return responseData;
  } catch (error) {
    throw new Error('Error');
  }
};
