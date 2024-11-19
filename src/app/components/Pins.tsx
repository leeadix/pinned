import Pin from './Pin';
import styles from './Pins.module.css';

let userLat = 33.915009959696000;
let userLon = -83.45577563155000;


type Pin = {
    id: number;
    place: string;
    type: string;
    area: string;
    address: string;
    imageUrl: string;
    lat: number;
    lon: number;
};

type PinsProps = {
    pins: Pin[];
};


const Users: React.FC<PinsProps> = ({pins}) => {
    return(
        <div className={styles.pinsBox}>
            {/* {pins.map(pin =>(<Pin key={pin.id} pin={pin} />))} */}
            {pins.sort((a, b) => a.place.localeCompare(b.place)).map(pin => (<Pin key={pin.id} pin={pin} />))}
        </div>
    );
}

export default Users;