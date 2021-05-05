import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BASE_URL } from '../../core/utils/auth';
import { makePrivateRequest } from '../../core/utils/request';
import CardDelivery from './CardDelivery';
import './styles.css';

const GetDeliveries = () => {
  const [search, setSearch] = useState([]);
  const { courseId } = useParams();

  useEffect(() => {
    makePrivateRequest({ url: `${BASE_URL}/deliveries/${courseId}`, method: 'GET' })
    .then(response => {
      setSearch(response.data)
    })
  }, [])

//   const handleOnClick = () => {
//     logout();
//   }

  return (
    <div className="deliveries-container">
        <div className="deliveries-content-below">
          {search?.map(delivery => (
            <CardDelivery 
            key={delivery.id}
            uri={delivery.uri}
            user={delivery.user}
            lesson={delivery.lesson}
            status={delivery.status}
            createdAt={delivery.createdAt} 
            feedback={delivery.feedback}
            id={delivery.id}
            />
          ))}
        </div>
    </div>
  );
}

export default GetDeliveries;