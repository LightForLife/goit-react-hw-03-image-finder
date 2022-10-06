import axios from 'axios';
import { Component } from 'react';

const params = {
  key: '29563076-116975c46708de5d99dfe50c3',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (text, currentPage) => {
  const url = `https://pixabay.com/api/?q=${text}&page=${currentPage}`;
  const response = await axios.get(url, { params });
  return response.data.hits;
};
