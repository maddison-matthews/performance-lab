type TMessageTransformer = (type: TType, array: TMessage[]) => TMessageTransformed[]

export const messageTransformer: TMessageTransformer = (type, array) => array.map((item) => ({
  type,
  content: item.message,
}));

type TCalc = (tickets: TTicket[]) => TStatistic
export const calculateStatistic: TCalc = (tickets) => tickets.reduce((acc, ticket, i, array) => ({
  ...acc,
  [ticket.priority]: acc[ticket.priority] + 1,
  uncompleted: {
    count: acc.uncompleted.count + Number(!ticket.completed),
    percentage: ((acc.uncompleted.count + Number(!ticket.completed)) / array.length) * 100,
  },
}), {
  high: 0,
  low: 0,
  normal: 0,
  uncompleted: {
    count: 0,
    percentage: 0,
  },
});

type TDebounce = (fn: () => void, ms: number) => (...args: unknown[]) => void
export const debounce: TDebounce = (fn, ms) => {
  let timer: NodeJS.Timeout;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
};
