import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { ReactComponent as Arrow} from '../../core/assets/images/arrow.svg'
import ButtonLogout from '../../core/components/ButtonLogout';
import { BASE_URL } from '../../core/utils/auth';
import { makePrivateRequest } from '../../core/utils/request';
import CardDelivery from './CardDelivery';
import './styles.css';

const GetDeliveries = () => {
  const [search, setSearch] = useState([]);
  const { courseId } = useParams();
  const history = useHistory();

  useEffect(() => {
    makePrivateRequest({ url: `${BASE_URL}/deliveries/${courseId}`, method: 'GET' })
    .then(response => {
      setSearch(response.data)
    })
  }, [])

  const handleGoBack = () => {
    history.push(`/course/${courseId}`);
  }

  return (
    <div className="deliveries-container">
      <div className="deliveries-content-above">
        <div className="deliveries-content-above-left" onClick={handleGoBack}>
          <Arrow className="custom-arrow-previous" />
          <h1>Voltar</h1>
        </div>
        <ButtonLogout/>
      </div>
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