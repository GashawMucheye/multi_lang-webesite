import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
  const { userId } = useParams();
  return <div className="text-white text-center">{userId}</div>;
};

export default SinglePage;
