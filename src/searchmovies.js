import React from 'react';
function searchmovies(){
        return(
            <div>
            <form classname='form'>
                <label classname='label' htmlfor="query"> Movie </label>
                <input classname="input" type="text" name="query"
                   placeholder="i.e.Jurassic Park"/>
				
                <button classname="button" type="submit">Search</button>   
            </form>
            </div>
        )
    }


export default searchmovies;