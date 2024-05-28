"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useReviews = () => {
 
    const [reviewsList, setReviewsList] = useState([]);

    useEffect(() => {
        getReviews();
    },[])

  const getReviews = () => {
    GlobalApi.getReviews().then(resp => {
        getReviews(resp.data.data)
    });
  }

  return reviewsList;

}

export default useReviews;