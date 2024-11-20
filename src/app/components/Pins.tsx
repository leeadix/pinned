import Pin from './Pin';
import styles from './Pins.module.css';


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