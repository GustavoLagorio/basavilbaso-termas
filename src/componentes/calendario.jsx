import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import "../styles/calendario.css"
import es from 'date-fns/locale/es';
import { addDays, startOfDay } from 'date-fns'; // Importa funciones de date-fns

function Calendario() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const today = addDays(startOfDay(new Date()), 3);

  return (
    <div>
      <DateRangePicker
        ranges={dateRange}
        onChange={handleSelect}
        minDate= {today}
        locale={es}
      />
    </div>
  );
}

export default Calendario;