import ListPrefectures from 'components/ListPrefectures';
import { render, screen } from '@testing-library/react';

describe('ListPrefectures', () => {
  test('correctly render with prefectures', () => {
    const fakePrefectures = [
      {
        prefCode: 1,
        prefName: '北海道',
      },
      {
        prefCode: 2,
        prefName: '青森県',
      },
      {
        prefCode: 3,
        prefName: '岩手県',
      },
      {
        prefCode: 4,
        prefName: '宮城県',
      },
      {
        prefCode: 5,
        prefName: '秋田県',
      },
    ];
    const { container } = render(
      <ListPrefectures prefectures={fakePrefectures} prefectureCode={1} />,
    );
    expect(screen.getByText(/都道府県/).textContent).toContain(
      fakePrefectures.length,
    );
    expect(screen.getAllByRole('radio')[0].hasAttribute('checked')).toBe(true);
    expect(container).toMatchSnapshot();
  });
});
