import orderByProps from '../app';

test('проверка обычной работы функции', () => {
    const obj = {
        defence: 40,
        health: 10,
        level: 2,
        attack: 80,
        name: 'мечник',
    };
    const args = ['name', 'level'];
    const received = orderByProps(obj, args);
    const expected = [
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}
    ];
    expect(received).toEqual(expected);
});