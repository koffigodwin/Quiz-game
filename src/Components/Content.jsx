import React , {createContext, useContext, useState} from 'react'

const Globalcontent = createContext()

const Content = ({children}) => {
    const [category, setcategory] = useState(9)
    const [difficult, setdifficult] = useState('easy')
  return (
    <Globalcontent.Provider value={{category, setcategory, difficult, setdifficult}}>
        {children}
    </Globalcontent.Provider>
  )
}

export default Content

export const  useGlobal = () =>{ 
    return useContext(Globalcontent)
}