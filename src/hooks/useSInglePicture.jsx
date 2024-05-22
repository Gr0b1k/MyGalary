"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSinglePicture = (id) => {

    const [detailPicture, setDetailPicture] = useState();

    useEffect(() => {
        getSinglePicture();
    },[id])
 
  const getSinglePicture = () => {
    GlobalApi.getSinglePicture(id).then(resp => {
        setDetailPicture(resp.data.data[0]);
    });
  }

  return detailPicture;
}

export default useSinglePicture