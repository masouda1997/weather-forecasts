import React from 'react'
import { Input } from 'antd'
import type { GetProps } from 'antd';
import "../assets/styles/components/searchbox.css"

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

const SearchBox:React.FC = () => {

   const onSearch:SearchProps['onSearch']= (value, _e, info) => console.log(info?.source, value);

   return (
      <section className='w-full flex justify-center items-center py-10'>
         {/* class custom related to pure css styles for customize the ant-design components which imported in top  */}
         <Search className='w-1/4 custom' placeholder='city'  allowClear onSearch={onSearch} />
      </section>
   )
}

export default SearchBox