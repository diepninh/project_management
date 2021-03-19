import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loading(){
  return(
    <div>
      <CircularProgress/>
      <h3>Please wait a few seconds !</h3>
    </div>
  );
}
export default Loading;
