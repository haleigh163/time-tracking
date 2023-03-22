export {};

declare global {
  type RestProps = { [rest: string]: any };

  type UseStateValues<T> = [T, Dispatch<SetStateAction<T>>];
  type SetState<T> = Dispatch<SetStateAction<T>>;

  // Timeframe?
  type Timeframe = {
    unit: OpUnitType | undefined;
    name: string;
  };

  // DATE / TIME / DAYJS
  type DayjsState = Dayjs | null;

  type DateTime = string | Dayjs | null;
  type TimeString = string | undefined;

  type TimeObject = {
    hours: number;
    minutes: number;
    seconds: number;
  };
}
