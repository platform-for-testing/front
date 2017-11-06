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
        iconClass: 'icon',
        label: 'One choice'
    },
    {
        value: parseInt(Types.Checkboxes.toString(), 10),
        iconClass: 'icon icon_checkbox',
        label: 'Multiple choices'
    },
    {
        value: parseInt(Types.YesNo.toString(), 10),
        iconClass: 'icon icon_truefalse',
        label: 'Yes/No'
    },
    {
        value: parseInt(Types.Order.toString(), 10),
        iconClass: 'icon icon_ordering',
        label: 'Ordering'
    },
    { value: parseInt(Types.Open.toString(), 10),
        iconClass: 'icon',
        label: 'Open answer'
    }
];
