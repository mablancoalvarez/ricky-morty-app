export const getMultiplesUrlsData = async (urls) => {
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const failed = responses.find((response) => !response.ok);

  if (failed) {
    throw new Error(`Failed to fetch ${failed.url}`);
  }

  return Promise.all(responses.map((response) => response.json()));
};
