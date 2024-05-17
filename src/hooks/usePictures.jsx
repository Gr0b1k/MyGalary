"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const usePictures = () => {

    const [picturesList, setPicturesList] = useState([]);

    useEffect(() => {
      getPictures();
    },[])

  const getPictures = () => {
    GlobalApi.getPictures().then(resp => {
      setPicturesList(resp.data.data)
      console.log(resp.data.data)
    });
  }

  return picturesList;

}

export default usePictures;