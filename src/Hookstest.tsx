import React, {  useEffect, useState } from 'react';
// 自定义hooks   抽离代码逻辑

// type Params={
//   loading:boolean,
//   data:{},
//   filmId:string
// }
const useFetchData = (filmId:String ):any => {
    const [loading, setLoading]= useState<Boolean>(true);
    const [data, setData] = useState<any>({});
    
    useEffect(() => {
      setLoading(true);
      fetch(`https://swapi.co/api/films/${filmId}`)
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false);
        });
    }, [filmId]);
  
    return [loading, data];
  };

  export default  function Com_hook  ({ filmId }:any) {
    const [loading, data] = useFetchData(filmId);
  
    if (loading === true) {
      return <p>Loading ...</p>;
    }
  
    return (
      <div>
        <p>电影名称: {data.title}</p>
        <p>导演: {data.producer}</p>
        <p>发布日期: {data.release_date}</p>
      </div>
    );
  }

//   const Hookstest = () => (
//     <div >
//       <Com_hook filmId={2} ></Com_hook>
//     </div>
//   )
  
