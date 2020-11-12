import React from "react";
import Iframe from 'react-iframe'


const Portfolio = () => (
  <div>
   <div className="container" >
        
        
        <div className="row" >
            
            <div className="col-md-8" id="portfolio" >
                <header> Portfolio</header>
                <hr/>
                <div className="row">
                
    <iframe src="https://drive.google.com/file/d/13AI4m_2kRyYfyaWAUkxtRMt-Mdg8eS6a/preview" alt= "project1" width="640" height="480"></iframe>                   
                  

                </div>
                <div className="row">
                  <iframe src="https://drive.google.com/file/d/1cpS17qWQaYtQXOrh9WSGJZLNzzL6Uokg/preview"  alt= "project2" width="640" height="480"></iframe>           

                  

                </div>
                <div className="row">
                  <iframe src="https://drive.google.com/file/d/10tuyTcp1lR_EqcgQcLQ7T1xw85nBUiOY/view"  alt= "project3" width="640" height="480"></iframe>                   

                    
                   

                </div> 
            </div>
        </div>
            
            <div className="col-md-8"></div>
    </div>









  </div>
);

export default Portfolio;
