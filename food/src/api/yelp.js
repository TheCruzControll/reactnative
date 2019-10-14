import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers:{
    Authorization:'Bearer 3uQVqlg7G6EMh8KlT6SDUkalGjNW-OTnk6NOTZTPR_SUs14P4TSBW5upn-CdwUjmoOGxxVC53jV5gbvYWIBV6c1xZ19nGqjEIaacR6Um8PmNUPHWFl2lxFeC1NOjXXYx'
  }
});
