export enum Types {
    Checkboxes = 0,
    Radio = 1,
    YesNo = 2,
    Order = 3,
    Open = 4
  }

export const questionTypes = [
    {
        value: parseInt(Types.Radio.toString(), 10),
        iconClass: 'select__icon pt-dot-circle-o',
        label: 'One choice'
    },
    {
        value: parseInt(Types.Checkboxes.toString(), 10),
        iconClass: 'select__icon pt-check-square-o',
        label: 'Multiple choices'
    },
    {
        value: parseInt(Types.YesNo.toString(), 10),
        iconClass: 'select__icon pt-thumbs-up',
        label: 'Yes/No'
    },
    {
        value: parseInt(Types.Order.toString(), 10),
        iconClass: 'select__icon pt-sort',
        label: 'Ordering'
    },
    { value: parseInt(Types.Open.toString(), 10),
        iconClass: 'select__icon pt-external-link-square',
        label: 'Open answer'
    }
];
