
   
     function setactive(k) 
	 {
            var k;
            var oUl=document.getElementById("tab-bar");
            var oli=oUl.getElementsByTagName("li");
            var nowbar=oli[k].getAttribute("class");
           
            var oTab=document.getElementById("tab-content");
            var oDiv=oTab.children;
            var nowview=oDiv[k].getAttribute("class");
             
           
      
            	   
            	    if (nowbar=="null") 
            	       {   
					     
                           for (var j=0; j<oli.length; j++)
                            {
                                oli[j].setAttribute("class","null");
                             }
                           
                               oli[k].setAttribute("class","active");
					   }


            
                    if (nowview=="tab-pane")
                      {
                             for (var i=0; i<oDiv.length; i++) 
                           {
                                oDiv[i].setAttribute("class","tab-pane");
                            }
                                oDiv[k].setAttribute("class","tab-pane active");
                      }
	}


       