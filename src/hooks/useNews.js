import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GetData from '../service/api/GetData'

export default useNews = (rout) => {
    // console.log(rout)

    const [healthNews, setHealthNews] = useState([])
    const [lawNews, setLawNews] = useState([])
    const [sportVnNews, setSportVnNews] = useState([])
    const [culinaryNews, setCulinaryNews] = useState([])
    const [financeNews, setFinanceNews] = useState([])
    const [carNews, setCarNews] = useState([])
    const [travelNews, setTralvelNews] = useState([])
    const [realEstateNews, setRealEstateNews] = useState([])
    const [educationNews, setEducationNews] = useState([])
    const [hot, setHot] = useState([])

    const qty = 5
    
    const filterBtCategory = (data, category) => {
      const result = data
        .filter(item => item.nameCategory === category)
        // .reverse()
        
        
      // const idCate = result.map(item => item.idCategory);
        

        // if(result.length){
        //     result.push({type: 'viewMore', category: nCategory, id: idCate})
        // }
        // console.log(result);

        return result;
    }

    const filterByDate = (data) => {
      const result = data
        // .filter(item => item.createTime)
        .reverse()
        // console.log(result);
        return result
    }
    
    const filterMultipleNews = async() => {
      const allNews = await GetData.getAll()
      
      setHealthNews(filterBtCategory(allNews, rout))
      setLawNews(filterBtCategory(allNews, 'Pháp luật'))
      setSportVnNews(filterBtCategory(allNews, rout))
      setCulinaryNews(filterBtCategory(allNews, rout))
      setFinanceNews(filterBtCategory(allNews, rout))
      setCarNews(filterBtCategory(allNews, rout))
      setTralvelNews(filterBtCategory(allNews, rout))
      setRealEstateNews(filterBtCategory(allNews, rout))
      setEducationNews(filterBtCategory(allNews, rout))
      
      // console.log(allNews.news);
    };
    
    useEffect(() => {
      filterMultipleNews()
    
    }, []);
  return [
            lawNews,
            healthNews,  
            sportVnNews, 
            culinaryNews, 
            financeNews, 
            carNews, 
            travelNews,
            realEstateNews,
            educationNews,
            ];
}