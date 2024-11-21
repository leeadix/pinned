import Pin from './Pin';
import styles from './Pins.module.css';


type Pin = {
    id: number;
    place: string;
    type: string;
    area: string;
    address: string;
    imageUrl: string;
    distance: number;
    lat: number;
    lon: number;
};

type PinsProps = {
    pins: Pin[];
};

type UserLoc = {
    userLat: number;
    userLon: number;
};

type SortsFiltersProps = {
    sorts: string;
    selectedTypes: string[];
    selectedLoc: string[];
};

type ExtendedPinsProps = PinsProps & UserLoc & SortsFiltersProps;

const Users: React.FC<ExtendedPinsProps> = ({pins, userLat, userLon, sorts, selectedTypes, selectedLoc}) => {

    if(sorts == "Name"){
        return(
            <div className={styles.pinsBox}>
                {pins.filter((pin)=> {if(selectedTypes.length === 0){return pin;}else if(selectedTypes.includes(pin.type)){return pin}})
                    .filter((pin)=> {if(selectedLoc.length === 0){return pin;}else if(selectedLoc.includes(pin.area)){return pin}})
                    .sort((a,b) => a.place.localeCompare(b.place))
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
                .sort((a,b) => a.place.localeCompare(b.place))
                .map(pin => (<Pin key={pin.id} pin={pin} />))}
            </div>
        );
    }
}

export default Users;


/* {pins.map(pin =>(<Pin key={pin.id} pin={pin} />))} */