import NorthDash from '@/components/NhNorth';
import SouthDash from '@/components/NhSouth';
import React, { useState } from 'react';

const Newhorizons = () => {
  const [hemisphere, setHemisphere] = useState('North');
  return (
    <div>
      {hemisphere === 'North' ? (
        <NorthDash hemisphere={hemisphere} setHemisphere={setHemisphere} />
      ) : (
        <SouthDash hemisphere={hemisphere} setHemisphere={setHemisphere} />
      )}
    </div>
  );
};

export default Newhorizons;
