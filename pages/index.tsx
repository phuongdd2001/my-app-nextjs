import React from 'react';
import Layout from '@/components/layout'
import Link from 'next/link'
import { Carousel } from 'antd';
// import 'antd/dist/reset.css';
import {API_SLIDER} from './api/value'
import Image from 'next/image';


function IndexPage(data: any) {
  console.log('data',data);
  // useEffect(() => {
  //   // fetchAPI();
  //   fetch('https://cms.volio.vn/api/slides?populate=deep')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log('data',data)
  //   })
  // }, [])

  //  async function fetchAPI(
  //   query = "",
  //   { variables }: Record<string, any> = {}
  // ) {
  //   const headers = { "Content-Type": "application/json" };
  
  //   const res = await fetch('https://cms.volio.vn/api/slides?populate=deep', {
  //     headers,
  //     method: "GET",
  //     body: JSON.stringify({
  //       query,
  //       variables,
  //     }),
  //   });
  
  //   const json = await res.json();
  
  //   if (json.errors) {
  //     console.error(json.errors);
  //     throw new Error("Failed to fetch API");
  //   }
  //   return json.data;
  // }

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  let dataSliders = data.data.data  &&   data.data.data[0] &&   data.data.data[0].attributes.Files;


  return (
    <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
      About
      </Link>
    </p>
    <Carousel afterChange={onChange}>
    {dataSliders.map((item: any) => (
      <div key={item.id}>
         <Image
        src={item.File.data.attributes.url}
        width={1920}
        height={1280}
        alt="Picture of the author"
        priority
      />
      </div>
    ))}
    </Carousel>
  </Layout>
  )
}


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(API_SLIDER)
  const data = await res.json()
 
  

  // Pass data to the page via props
  return { props: { data } }
}
  



export default IndexPage