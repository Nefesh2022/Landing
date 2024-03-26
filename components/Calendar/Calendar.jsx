import { useState } from 'react';
import styles from './Calendar.module.css';
import ChevronIcon from '@/components/ChevronIcon';
import cn from '@/utils/classNames';
import Img from '../Img';
import close from 'public/assets/icon-close.svg';
import PropTypes from 'prop-types';

const months = [
  { name: 'Enero', value: 1 },
  { name: 'Febrero', value: 2 },
  { name: 'Marzo', value: 3 },
  { name: 'Abril', value: 4 },
  { name: 'Mayo', value: 5 },
  { name: 'Junio', value: 6 },
  { name: 'Julio', value: 7 },
  { name: 'Agosto', value: 8 },
  { name: 'Septiembre', value: 9 },
  { name: 'Octubre', value: 10 },
  { name: 'Noviembre', value: 11 },
  { name: 'Diciembre', value: 12 },
];

const Calendar = ({
  name,
  value,
  inputHandler,
  handleClose,
  top,
  left,
  right,
  bottom,
}) => {
  const [open, setOpen] = useState({
    month: false,
    year: false,
  });
  const [currentMonth, setCurrentMonth] = useState(new Date(value));

  const daysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const startOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const generateCalendar = () => {
    const days = [];
    const daysInCurrentMonth = daysInMonth(currentMonth);
    const startDay = startOfMonth(currentMonth);

    // Fill in the days before the first day of the month
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    // Fill in the days of the current month
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      days.push(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
      );
    }

    return days;
  };

  const generateYears = () => {
    let years = [];
    let year = 1950;
    const currentYear = new Date().getFullYear();

    for (let i = currentYear; i > year; i--) {
      years.push(i);
    }

    return years;
  };

  const handleDayClick = (day) => {
    if (!day) return;
    const newday = day.toISOString().split('T')[0];
    const payload = { target: { name, value: newday } };
    inputHandler(payload);
    handleClose();
  };

  const verifySelectedDate = (day) => {
    if (!day) return;
    if (day.toISOString().split('T')[0] === value) return true;
    return false;
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const calendarDays = generateCalendar();

  const handleSetMonth = (month) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), month - 1, 1));
    handleOpenMonths();
  };

  const handleSetYear = (year) => {
    setCurrentMonth(new Date(year, currentMonth.getMonth(), 1));
    handleOpenYears();
  };

  const handleOpenMonths = () => {
    setOpen({
      ...open,
      month: !open.month,
    });
  };

  const handleOpenYears = () => {
    setOpen({
      ...open,
      year: !open.year,
    });
  };

  return (
    <div
      className={styles.container}
      style={{
        top: top,
        left: left,
        right: right,
        bottom: bottom,
      }}
    >
      {open.month && (
        <div className={styles.months}>
          <Img
            src={close}
            width={30}
            height={30}
            alt="Cerrar"
            className={styles.close}
            onClick={handleOpenMonths}
          />
          {months.map((month) => (
            <span
              className={styles.month}
              key={month.value}
              onClick={() => handleSetMonth(month.value)}
            >
              {month.name}
            </span>
          ))}
        </div>
      )}
      {open.year && (
        <div className={styles.years}>
          <Img
            src={close}
            width={30}
            height={30}
            alt="Cerrar"
            className={styles.close}
            onClick={handleOpenYears}
          />
          <div className={styles.yearsAll}>
            {generateYears().map((year) => (
              <span
                className={styles.year}
                key={year}
                onClick={() => handleSetYear(year)}
              >
                {year}
              </span>
            ))}
          </div>
        </div>
      )}
      {!Object.values(open).includes(true) && (
        <div className={styles.calendarContainer}>
          <div className={styles.header}>
            <button className={styles.button} onClick={prevMonth}>
              <ChevronIcon type="left" color="white" />
            </button>
            <div className={styles.textContainer}>
              <span className={styles.span} onClick={handleOpenMonths}>
                {currentMonth.toLocaleString('es-US', { month: 'long' })}
                <ChevronIcon color="white" type="down" width={15} height={15} />
              </span>
              <span className={styles.span} onClick={handleOpenYears}>
                {currentMonth.toLocaleString('es-US', { year: 'numeric' })}
                <ChevronIcon color="white" type="down" width={15} height={15} />
              </span>
            </div>
            <button className={styles.button} onClick={nextMonth}>
              <ChevronIcon type="right" color="white" />
            </button>
          </div>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th>Dom</th>
                <th>Lun</th>
                <th>Mar</th>
                <th>Mie</th>
                <th>Jue</th>
                <th>Vie</th>
                <th>Sab</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {calendarDays.map((day, index) => (
                <td
                  className={cn(
                    styles.td,
                    verifySelectedDate(day) && styles.tdSelected
                  )}
                  key={index}
                  onClick={() => handleDayClick(day)}
                >
                  {day ? day.getDate() : ''}
                </td>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

Calendar.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  inputHandler: PropTypes.func,
  handleClose: PropTypes.func,
  top: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
};

Calendar.defaultProps = {
  name: '',
  value: '',
  inputHandler: () => {},
  handleClose: () => {},
  top: '',
  left: '',
  right: '',
  bottom: '',
};

export default Calendar;
