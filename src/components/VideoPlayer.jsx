import { useState } from "react"

export default function VideoPlayer(){

    const [youtubeId, setYoutubeId] = useState([

        'nfuLwHCUrcA', 

        '1DGNn0GslLQ',

        'rTuxUAuJRyY',

        'P8PWN1OmZOA',

        'eK5gPcFjQps',

        // 'Hh66AZ9QagQ',

        // '0J0HZrDvbjY',

        // 'xR-LnKJGxwM'













    ])

    let [btn, setBtn] = useState(0);


    return <div style={{background: "white"}}> 

        <h1 style={{fontFamily: "fantasy", marginTop: "2%"}}>Collection of Old Bollywood Songs</h1>



        <div className="video" style={{display: "flex", marginTop: "2%" }}>



    


        {youtubeId.map(function(ytId){


            

            return <div>

               

              <RenderVideo ytId={ytId} className="render"></RenderVideo>

                
            </div>
        })}


        </div>

        
    </div>




}













function RenderVideo({ytId}){

 

    return <div style={{alignContent: "center"}}>
  
  <iframe className='video'
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen" 
          msallowfullscreen="msallowfullscreen" 
          oallowfullscreen="oallowfullscreen" 
          webkitallowfullscreen="webkitallowfullscreen"
          src={`https://youtube.com/embed/${ytId}?autoplay=0`}>
  </iframe>
    </div>
  }
  