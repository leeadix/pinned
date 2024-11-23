import Pin from './Pin';
import styles from './Pins.module.css';


type Pin = {
    id: number;
    name: string;
    type: string;
    area: string;
    address: string;
    imageUrl: string;
    distance: number;
    lat: number;
    lon: number;
};

let userLat = 33.95776534918996; 
let userLon = -83.37535277631285;

function getUserCoordinates(){
  if(navigator){
  navigator.geolocation.getCurrentPosition((position)=>{
      userLat = position.coords.latitude;
      userLon = position.coords.longitude;
    //   console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
    //   console.log(`User Latitude: ${userLat}, User Longitude: ${userLon}`);
  })}else{
    alert("Geolocation features not available!\n Location set to the UGA Arch");
  }
}

type PinsProps = {
    pins: Pin[];
};


type SortsFiltersProps = {
    sorts: string;
    selectedTypes: string[];
    selectedLoc: string[];
};

type ExtendedPinsProps = PinsProps & SortsFiltersProps;

const Users: React.FC<ExtendedPinsProps> = ({pins, sorts, selectedTypes, selectedLoc}) => {

    if(sorts == "Name"){
        return(
            <div className={styles.pinsBox}>
                {pins.filter((pin)=> {if(selectedTypes.length === 0){return pin;}else if(selectedTypes.includes(pin.type)){return pin}})
                    .filter((pin)=> {if(selectedLoc.length === 0){return pin;}else if(selectedLoc.includes(pin.area)){return pin}})
                    .sort((a,b) => a.name.localeCompare(b.name))
                    .map(pin => (<Pin key={pin.id} pin={pin} />))}
            </div>
        );
    }else if(sorts == "Area"){
        return(
            <div className={styles.pinsBox}>
                {pins.filter((pin)=> {if(selectedTypes.length === 0){return pin;}else if(selectedTypes.includes(pin.type)){return pin}})
                .filter((pin)=> {if(selectedLoc.length === 0){return pin;}else if(selectedLoc.includes(pin.area)){return pin}})
                .sort((a,b) => a.area.localeCompare(b.area))
                .map(pin => (<Pin key={pin.id} pin={pin} />))}
            </div>
        );

    }else if(sorts == "Type"){
        return(
            <div className={styles.pinsBox}>
                {pins.filter((pin)=> {if(selectedTypes.length === 0){return pin;}else if(selectedTypes.includes(pin.type)){return pin}})
                .filter((pin)=> {if(selectedLoc.length === 0){return pin;}else if(selectedLoc.includes(pin.area)){return pin}})
                .sort((a,b) => a.type.localeCompare(b.type))
                .map(pin => (<Pin key={pin.id} pin={pin} />))}
            </div>
        );

    }else if(sorts == "Distance"){
        
        getUserCoordinates();
        
        pins.map((pin)=> {
            pin.distance = Math.sqrt(Math.pow(userLat-pin.lat,2)+Math.pow(userLon-pin.lon,2))
        })

        return(
            <div className={styles.pinsBox}>
                {pins.filter((pin)=> {if(selectedTypes.length === 0){return pin;}else if(selectedTypes.includes(pin.type)){return pin}})
                .filter((pin)=> {if(selectedLoc.length === 0){return pin;}else if(selectedLoc.includes(pin.area)){return pin}})
                .sort((a,b) => a.distance-b.distance)
                .map(pin => (<Pin key={pin.id} pin={pin} />))}
            </div>
        );

    }else{
        return(
            <div className={styles.pinsBox}>
                {pins.filter((pin)=> {if(selectedTypes.length === 0){return pin;}else if(selectedTypes.includes(pin.type)){return pin}})
                .filter((pin)=> {if(selectedLoc.length === 0){return pin;}else if(selectedLoc.includes(pin.area)){return pin}})
                .sort((a,b) => a.name.localeCompare(b.name))
                .map(pin => (<Pin key={pin.id} pin={pin} />))}
            </div>
        );
    }
}

export default Users;


/* {pins.map(pin =>(<Pin key={pin.id} pin={pin} />))} */