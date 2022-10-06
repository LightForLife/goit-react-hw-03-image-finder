import axios from 'axios';
import { Component } from 'react';

const params = {
  key: '29563076-116975c46708de5d99dfe50c3',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

console.log('first');
const currentPage = 1;

// export const create = async text => {
//   const url = `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}`;

//   const response = await axios.get(url, { params });
//   console.log(response);
// };

// console.log(create());

export const searchImages = async text => {
  const url = `https://pixabay.com/api/?q=${text}&page=${currentPage}`;
  const response = await axios.get(url, { params });
  console.log(response.data.hits);
  return response.data.hits;
};
