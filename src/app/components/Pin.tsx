import Image from 'next/image';
import styles from './Pin.module.css';
import Card from './Card';

type PinProps = {
  pin: {
    id: number;
    place: string;
    type: string;
    area: string;
    address: string;
    imageUrl: string;
  };
};
export default function Pin({ pin }: PinProps) {
    return (
      <Card  className={styles.pinItem}>
        <Image className={styles.pinImg}
          src={pin.imageUrl} 
          alt={`picture of ${pin.place}`} 
          width={300} 
          height={300}
          priority
        />
        <div  className={styles.pinInfo}>
          <h2>{pin.place}</h2>
          <div className='flex justify-around'>
            <div className=''><p>{pin.type}</p></div>
            <div className=''><p>{pin.area}</p></div>
          </div>  
        </div>
      </Card>
    );
  }