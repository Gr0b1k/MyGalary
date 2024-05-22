"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useAutors = () => {
 
    const [autorsList, setAutorsList] = useState([]);

    useEffect(() => {
      getAutors();
    },[])

  const getAutors = () => {
    GlobalApi.getAutors().then(resp => {
        setAutorsList(resp.data.data)
    });
  }

  return autorsList;

}

export default useAutors;