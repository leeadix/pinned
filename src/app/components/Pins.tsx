import Pin from './Pin';
import styles from './Pins.module.css';


type Pin = {

    id: number;
    place: string;
    type: string;
    area: string;
    address: string;
    imageUrl: string;
};

type PinsProps = {
    pins: Pin[];
};


const Users: React.FC<PinsProps> = ({pins}) => {
    return(
        <div className={styles.pinsBox}>
            {pins.map(pin =>(<Pin key={pin.id} pin={pin} />))}
        </div>
    );
}

export default Users;