import React from 'react'

const ArticleList = ({title, date, preview, minutes}) => {
    if(!date){
        date  = "January 1, 1970."
    }

    if(minutes > 0 && minutes === 5){        
                return (
                    <main>
                        <article>
                            <h3>{title}</h3>
                            <span>  
                            <small>{date}</small>
                            <small>☕{minutes} min read</small>
                            </span>                            
                            <p>{preview}</p> 
                        </article>
                    </main>
                  )
           
    }else if (minutes > 10 && minutes < 20){
                return (
                    <main>
                        <article>
                            <h3>{title}</h3>
                            <span>  
                            <small>{date}</small>
                            <small>☕☕☕{minutes} min read</small>
                            </span>
                            <p>{preview}</p> 
                        </article>
                    </main>
                 )
     
    }else if (minutes > 40  && minutes < 50){
        return (
            <main>
                <article>
                    <h3>{title}</h3>
                    <span>
                    <small>{date}</small>
                    <small>🍱🍱🍱🍱🍱 {minutes} min read</small>
                    </span> 
                    <p>{preview}</p> 
                </article>
            </main>
        
        )
        
    }
  
}

export default ArticleList
