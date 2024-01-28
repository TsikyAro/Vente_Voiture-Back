import React, { useEffect, useState } from 'react';
import moment from 'moment';
const DateDifferenceComponent = (product) => {
  const [difference, setDifference] = useState('');

  useEffect(() => {
    const calculateDifference = () => {
      console.log(product.product.dateplublication);
      if (product && product.product.dateplublication) {
        const targetDate = moment(product.product.dateplublication);
        const currentDate = moment();
        const duration = moment.duration(currentDate.diff(targetDate));

        const months = duration.months();
        const days = duration.days();
        const hours = duration.hours();

        const formattedDifference = `${months} mois, ${days} jours et ${hours} heures`;
        setDifference(formattedDifference);
      } else {
        console.error("Product does not have a valid 'date' property:", product);
      }
    };

    calculateDifference();
  }, [product]);

  return (
    <div>
      <p>{difference}</p>
    </div>
  );
};

export default DateDifferenceComponent;
