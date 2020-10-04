import React from 'react';
import info from '../files/info.json';

class ReadJSON extends React.Component{
    viewJSON(){

        // config({
        //     path:path.resolve(process.cwd(),'.env')
        // });
        console.log(info);
    }
    render(){
        return (
            <button onClick={this.viewJSON}>View JSON</button>
        );
    }
}

export default ReadJSON;