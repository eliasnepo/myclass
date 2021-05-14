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
      setSearch(response.data.content)
    })
  }, [courseId])

  const handleGoBack = () => {
    history.push(`/course/${courseId}`);
  }

  const onSubmitSelect = (event) => {
    const params = {
      status: event.target.value
    }

    makePrivateRequest({ url: `${BASE_URL}/deliveries/${courseId}`, method: 'GET', params })
    .then(response => {
      setSearch(response.data.content)
    })
  }

  return (
    <div className="deliveries-container">
      <div className="deliveries-content-above">
        <div className="deliveries-content-above-left" onClick={handleGoBack}>
          <Arrow className="custom-arrow-previous" />
          <h1>Voltar</h1>
        </div>
        <div>
          <select className="select-status" onChange={onSubmitSelect}>
            <option value="PENDING">Pendentes</option>
            <option value="ACCEPTED">Aceito</option>
            <option value="REJECTED">Rejeitados</option>
          </select>
        <ButtonLogout/>
        </div>
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