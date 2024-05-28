"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSingleAutor = (id) => {

    const [detailAutor, setDetailAutor] = useState();

    useEffect(() => {
        getSingleAutor();
    },[id])
 
  const getSingleAutor = () => {
    GlobalApi.getSingleAutor(id).then(resp => {
        setDetailAutor(resp.data.data[0]);
    });
  }

  return detailAutor;
}

export default useSingleAutor