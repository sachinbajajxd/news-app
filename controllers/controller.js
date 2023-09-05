import axios from "axios";

export const fetchNews = async (req, res) => {
  try {
    const apiKey = "85940a4d7b23488ba7ecd9e9e7c6533e";
    const { search, country } = req.query;

    let apiUrl = 'https://newsapi.org/v2/';

    const pageSize = 10;

    if (!search && !country) {
      apiUrl += `everything?apiKey=${apiKey}&q=india&pageSize=${pageSize}`;
    } else if (search && country) {
      apiUrl += `top-headlines?apiKey=${apiKey}&q=${search}&country=${country}&pageSize=${pageSize}`;
    } else if (search) {
      apiUrl += `everything?apiKey=${apiKey}&q=${search}&pageSize=${pageSize}`;
    } else if (country) {
      apiUrl += `top-headlines?apiKey=${apiKey}&country=${country}&pageSize=${pageSize}`;
    } else {
      return res.status(400).json({ error: 'Invalid request' });
    }

    const response = await axios.get(apiUrl);

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
