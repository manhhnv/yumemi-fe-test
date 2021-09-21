import { MainLayout } from 'layouts/MainLayout';
import { getPrefectures } from 'apis/getPrefectures';
import { useEffect, useState } from 'react';
import { Prefecture } from '@types';
import ListPrefectures from 'components/ListPrefectures';
import Chart from 'components/Chart';
import Spinner from 'components/Spinner';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [prefectureCode, setPrefectureCode] = useState(1);

  const selectPrefecture = (code: number) => {
    if (code !== prefectureCode) setPrefectureCode(code);
  };

  useEffect(() => {
    getPrefectures()
      .then((data) => {
        setPrefectures(data);
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <MainLayout>
      <div className="container">
        <div className="row" style={{ marginTop: 100 }}>
          {loading ? (
            <Spinner />
          ) : (
            <ListPrefectures
              prefectures={prefectures}
              prefectureCode={prefectureCode}
              selectPrefecture={selectPrefecture}
            />
          )}
          <div className="col-xs-12 col-md-7">
            <Chart prefectureCode={prefectureCode} title="人口構造図" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default HomePage;
