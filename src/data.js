export const fetchData = () => {
  const startDate = new Date();
  const endDate = new Date(startDate.getTime() + 60 * 24 * 60 * 60 * 1000);

  const schedule = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    if (currentDate.getDay() === 1) {
      let availableSeats = Math.floor(Math.random() * 7) + 1;
      const classTime = new Date(currentDate.getTime());
      classTime.setHours(16, 0, 0, 0);

      const classEndTime = new Date(classTime.getTime());
      classEndTime.setHours(classEndTime.getHours() + 1);

      const classObj = {
        date: currentDate.toISOString().slice(0, 10),
        startTime: classTime.toTimeString().slice(0, 5),
        endTime: classEndTime.toTimeString().slice(0, 5),
        availableSeats: Math.random() < 0.3 ? 0 : availableSeats,
        className: "Python",
      };

      schedule.push(classObj);
    }

    if (currentDate.getDay() === 3) {
      let availableSeats = Math.floor(Math.random() * 7) + 1;
      const classTime = new Date(currentDate.getTime());
      classTime.setHours(17, 0, 0, 0);

      const classEndTime = new Date(classTime.getTime());
      classEndTime.setHours(classEndTime.getHours() + 1);

      const classObj = {
        date: currentDate.toISOString().slice(0, 10),
        startTime: classTime.toTimeString().slice(0, 5),
        endTime: classEndTime.toTimeString().slice(0, 5),
        availableSeats: Math.random() < 0.3 ? 0 : availableSeats,
        className: "Java",
      };

      schedule.push(classObj);
    }

    if (currentDate.getDay() === 5 || currentDate.getDay() === 6) {
      let availableSeats = Math.floor(Math.random() * 7) + 1;
      const classTime = new Date(currentDate.getTime());
      classTime.setHours(9, 0, 0, 0);

      const classEndTime = new Date(classTime.getTime());
      classEndTime.setHours(classEndTime.getHours() + 1);

      const classObj = {
        date: currentDate.toISOString().slice(0, 10),
        startTime: classTime.toTimeString().slice(0, 5),
        endTime: classEndTime.toTimeString().slice(0, 5),
        availableSeats: Math.random() < 0.3 ? 0 : availableSeats,
        className: "HTML",
      };

      schedule.push(classObj);
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return Promise.resolve(schedule);
};
