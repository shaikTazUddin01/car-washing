export const convartToNumber = (time: string) => {
  const [hours, minuts] = time.split(":").map(Number);
  const convert = hours * 60 + minuts;

  return convert;
};

export const createSolt = (
  startTime: number,
  endTime: number,
  serviceDuration: number
): number => {
  const totalSlot = (endTime - startTime) / serviceDuration;
  return Math.floor(totalSlot);
};

export const convertToTime = (time: number) => {
  var hours = time / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + ":" + rminutes;
};
