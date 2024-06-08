import { useState } from "react"


export default function Landing(){


    const [src, setSrc ] = useState(["https://images.pexels.com/photos/24514315/pexels-photo-24514315/free-photo-of-a-car-in-the-wilderness.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",


    "https://images.pexels.com/photos/23105890/pexels-photo-23105890/free-photo-of-a-person-standing-on-the-beach-with-the-sun-shining.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    "https://images.pexels.com/photos/23708066/pexels-photo-23708066/free-photo-of-black-and-white-photograph-of-a-forest-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

   



    ])


    const [src2, setSrc2 ] = useState([

        "https://images.pexels.com/photos/21839291/pexels-photo-21839291/free-photo-of-the-sun-shines-through-a-window-in-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

        "https://images.pexels.com/photos/21821538/pexels-photo-21821538/free-photo-of-les-eclaireurs-el-faro-mas-austral-de-argentina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

        "https://images.pexels.com/photos/12127282/pexels-photo-12127282.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    ])


    // let [count, setCount] = useState(1);

    

return <div style={{background: "white"}}>


        





    <div className="hi" style={{display: "flex"}}>

            
        {src.map(function(sr){

           
        

            // count++;





        return <div>

            <img src={sr} alt="" width={"500px"}  height={"300px"}/>

            {/* <h1>{count}</h1> */}
            </div>


})}

    </div>



    <div className="hi" style={{display: "flex"}}>


            
        {src2.map(function(sr2){




            return <div>

                <img src={sr2} alt=""  width={"500px"}  height={"400px"} />
                </div>
})}




    </div>











    </div>



}

{/* 
        {src.slice(i,j)
        
        .map(function(sr){

            return <div>


                <img src={sr} alt="" />
            </div>

            i=4;
            j=7;
        })} */}




        
    // </div>






