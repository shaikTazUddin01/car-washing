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
  const hours = time / 60;
  const rhours = Math.floor(hours).toString().padStart(2,'0');
  const minutes = (hours - parseInt(rhours)) * 60;
  const rminutes = Math.round(minutes).toString().padStart(2,'0');
  return rhours + ":" + rminutes;
};
