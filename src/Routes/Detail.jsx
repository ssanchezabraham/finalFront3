import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/GlobalContext';

function Detail() {
  const { theme } = useGlobalContext();
  const { id } = useParams();
  const { dentists } = useGlobalContext();
  const dentist = dentists.find((dentist) => dentist.id === parseInt(id));

  return (
    <div>
      {dentist ? (
        <div className={`content ${theme}`}>
          <h2>Detail Dentist {dentist.id}</h2>
          <table>
            <tbody>
              <tr className="table-title">
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Website</td>
              </tr>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>No details found for dentist with ID {id}</p>
      )}
    </div>
  );
}

export default Detail;