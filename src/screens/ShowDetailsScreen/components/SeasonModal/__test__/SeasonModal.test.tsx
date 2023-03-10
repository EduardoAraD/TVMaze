import React, {createRef} from 'react';
import {render, act, fireEvent} from '@testing-library/react-native';
import {SeasonModal} from '../SeasonModal';
import {Modalize} from 'react-native-modalize';

describe('SeasonModal', () => {
  test('show all season option', () => {
    const modalizeRef = createRef<Modalize>();

    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={() => console.log('')}
        seasons={['1', '2', '3']}
        selectedSeason="1"
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    expect(getAllByText(/season/i).length).toEqual(3);
  });
  test('call onSelectSeason with correct season when season option was pressed', () => {
    const modalizeRef = createRef<Modalize>();

    const onSelectSeasonMock = jest.fn();

    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={onSelectSeasonMock}
        seasons={['1', '2', '3']}
        selectedSeason="1"
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    const season2Element = getByText(/season 2/i);
    fireEvent.press(season2Element);

    expect(onSelectSeasonMock).toBeCalledWith('2');
  });
});
