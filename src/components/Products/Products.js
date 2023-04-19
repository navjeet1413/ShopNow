import { useEffect, useState } from "react"
import ListItem from "./ListItems/ListItem"
//import axios from "axios"
import Loader from "../UI/Loader"

const Products = ({ onAddItem, onRemoveItem, eventState }) => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)

   
    const data={
        "items": [
          {
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  -",
            "discountedPrice": 300,
            "price": 400,
            "thumbnail": "placeholder.png",
            "title": "Muesli"
          },
          {
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  -",
            "discountedPrice": 27,
            "price": 30,
            "thumbnail": "placeholder.png",
            "title": "Oreo Biscuit, Buy 1 Get 1"
          },
          {
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  -",
            "discountedPrice": 340,
            "price": 450,
            "thumbnail": "placeholder.png",
            "title": "Bagrry's Crunchy Fruit & Nut with Cranberries Muesli (Pouch)"
          },
          {
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  -",
            "discountedPrice": 85,
            "price": 100,
            "thumbnail": "placeholder.png",
            "title": "Oreo Biscuit, Pack of 3"
          },
          {
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  -",
            "discountedPrice": 340,
            "price": 450,
            "thumbnail": "placeholder.png",
            "title": "Muesli, Pack of 2"
          },
          {
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  -",
            "discountedPrice": 27,
            "price": 30,
            "thumbnail": "placeholder.png",
            "title": "Oreo Biscuit, Buy 1 Get 1"
          },
          {
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  -",
            "discountedPrice": 340,
            "price": 450,
            "thumbnail": "placeholder.png",
            "title": "Bagrry's Crunchy Fruit & Nut with Cranberries Muesli (Pouch)"
          },
          {
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  -",
            "discountedPrice": 85,
            "price": 100,
            "thumbnail": "placeholder.png",
            "title": "Oreo Biscuit, Pack of 3"
          }
        ]
      }

    useEffect(() => {
        //async and await keyword enable asynchronus and promise base behaviour and much cleaner
        async function fetchItems() {    // async jaise setinterval mel response milta hai  usse asynchronus kaihte hai
            try {
                //  const response = await axios.get('https://navjeetst-2-default-rtdb.asia-southeast1.firebasedatabase.app','Access-Control-Allow-Origin: *')
                //  const data = response.data
                const transformedData = data.items.map((item, index) => {
                    return {
                        ...item,
                        quantity: 0,  //jo hum fetch kre hai data usme id nhi hai isliye transformed data me baaki sab kuch or id di 
                        id: index     //hume id chayie kyuki neeche items.id kri hui hai OR to diffrenciate b/w card items
                    }
                })
                // setLoader(false)
                setItems(transformedData)   
            } 
            catch (error) {
                // setLoader(false)
                console.log("Error: ", error)
                alert(error.message);
            }
            finally {
                setLoader(false)
            }
        }

        fetchItems();
    },[])

    useEffect(() => {
        if(eventState.id > -1) {
            if(eventState.type === 1) {
                handleAddItem(eventState.id)
            }
            else if(eventState.type === -1) {
                handleRemoveItem(eventState.id)
            }
        }
    }, [eventState])

    const handleAddItem = id => {
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        data[index].quantity += 1

        setItems([...data])
        onAddItem(data[index]);
    }

    const handleRemoveItem = id => {
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        if(data[index].quantity !== 0) {
            data[index].quantity -= 1
            setItems([...data])
            onRemoveItem(data[index])
        }
    }

    return (
        <>
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {/* <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem> */}
                {
                    items.map(item => {
                        return (<ListItem onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item}/>)
                    })
                }
                {/*map will iterate like array and return list where where we pass a prop item */}
                {/*pehle hume khud manualyy add krne pdre the listitem ab map ka use kreke wo khud iterate kredega}
                
                {[<ListItem data={item[0]}/>,<ListItem data={item[1]}/>,<ListItem data={item[3]}/>]} */}
            </div>
        </div>
        { loader && <Loader/>}
        </>
    )
}

export default Products