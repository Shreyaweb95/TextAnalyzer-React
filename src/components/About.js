import React, { useState } from 'react'

export default function About() {

const [myStyle, setMyStyle] = useState({
    color:'black',
    backgroundColor:'white'
    })
const [mybtnText, setmybtnText] = useState("enable dark mode") 

const togglebtn=()=>{
    if(myStyle.color === 'white'){
       setMyStyle({
        color:'black',
        backgroundColor:'white'
       })
       setmybtnText("enable dark mode")
    }
    else{
        setMyStyle({
            color:'white',
            backgroundColor:'black'
           })
        setmybtnText("enable light mode")
    }

}
  return (
<>   
<div className='container' style={myStyle}>
<h2 className='my-3 mx-3' >About Us</h2>
      <div id="accordion" style={myStyle}>
            <div class="card my-2" >
            <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                    <button class="btn btn-link"style={myStyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                     Collapsible Group Item #1
                    </button>
                </h5>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body" style={myStyle}>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
        </div>
    </div>
    <div class="card my-2" >
        <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" style={myStyle} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Collapsible Group Item #2
                    </button>
                </h5>
        </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
        <div class="card-body" style={myStyle}>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
    </div>
    </div>
    <div class="card my-2">
        <div class="card-header" id="headingThree">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" style={myStyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Collapsible Group Item #3
                </button>
            </h5>
        </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body" style={myStyle}>
                 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
    </div>
    </div>
</div>
<div className="container">

 <button onClick={togglebtn} className='btn btn-primary my-2' type='button'>{mybtnText}</button>

</div>
</div>

</> 
  )
}

